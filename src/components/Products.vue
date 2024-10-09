<template>
  <div class="q-pa-md row items-start q-gutter-md" v-for="(item, index) in items" :key="item" :index="index">
    <q-card class="my-card" flat bordered>
      <q-img :src="item.image" class="product-card-img" />
      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);" @click="located(item)" />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{ item.name }}</div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />250 ft
          </div>
        </div>
        <q-rating v-model="item.stars" :max="5" size="32px" @click="vote(item)"/>
      </q-card-section>
      <q-card-section class="q-pt-none product-card-description">
        <div class="text-subtitle1"> {{ item.title }}</div>
        <div class="text-caption text-grey q-pt-none"> {{ item.description }}</div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="reserve(item)">Reserve</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <ReserveDialogComponent
    v-model="openReserveDialog"
    :title="`Reserve on${selectedItem?.name || ''}`"
    :onConfirmAction="handleReserve"
    :item="selectedItem"/>
</template>

<script>
import { ref } from 'vue'
import { logGAEvent } from 'boot/firebase'
import { analytics_events } from 'src/services/analytics'
import kebabCase from 'lodash/kebabCase'
import ReserveDialogComponent from 'components/ReserveDialog.vue'

export default {
  name: 'ProductsComponent',
  components: {
    ReserveDialogComponent
  },
  setup() {
    const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
    const selectedItem = ref(null)
    const openReserveDialog = ref(false)
    const closeReserveDialog = ref(false)
    
    const reserve = (item) => {
      selectedItem.value = item
      openReserveDialog.value = true
    }

    const handleReserve = (userData) => {
      console.log('Reserve By' , userData)
      if (selectedItem.value) {
        console.log(`Reserving ${selectedItem.value.name}`, selectedItem.value)
        logGAEvent(analytics_events.reserve, {
          item: kebabCase(selectedItem.value.name)
        });
      }
      openReserveDialog.value = false
      selectedItem.value = null
    }

    const located = (item) => {
      console.log(`Located ${item.name}`, item)
      logGAEvent(analytics_events.located, {
        item: kebabCase(item.name)
      });
    }

    const vote = (item) => {
      console.log(`Vote ${item.name}`, item)
      logGAEvent(analytics_events.vote, {
        item: kebabCase(item.name)
      });
    }
    
    const items = ref([
      {
        name: "Elkika Ilmenau",
        title: "$・German Bar",
        image: "https://www.elkika.cl/wp-content/uploads/2016/03/Lomo-italiano-baja-1.jpg",
        description: "Elkika Ilmenau is a place where you can enjoy the best drinks and food in a cozy and modern place, with a great view to the city.",
        stars: avg([4, 3, 5, 4, 1]),
        place: ""
      },
      {
        name: "Gracielo bar",
        title: "$・Chilean, Bar",
        description: "Bar specialized in experience, is located on the second and third level of Casa Garla, being this last level on the rooftop, Our menu presents a proposal of tapas and signature cocktails, each cocktail has its own identity, specially designed For our guests. We work with love and dedication.",
        image: "https://www.800.cl/galeriasitios/Och/2023/3/21/Och__800-Gracielo-Bar-2023-01-GF-lugar-F1-IMG_7648.jpg",
        stars: avg([4, 3, 1, 5, 1]),
        place: ""
      },
      {
        name: "Signore",
        title: "$・Italian, Cafe",
        description: "High Quality Italian Pizzeria, Restaurant and Italian Bar, with all that you need to have the best experience in one of the centers of Santiago, in front to Costanera Center and Hotels liker Double Three and NH Collection.",
        image: "https://cdn-italiani-media.italiani.it/site-chile/sites/105/2021/02/bar.jpg",
        stars: avg([3, 3, 4, 5, 5]),
        place: ""
      }
    ]);

    return {
      avg,
      items,
      handleReserve,
      located,
      vote,
      selectedItem,
      closeReserveDialog,
      openReserveDialog,
      reserve
    }

  }
}
</script>