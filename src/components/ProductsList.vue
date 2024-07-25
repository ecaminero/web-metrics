<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ProductsComponent v-for="(item, index) in items" :key="item" :index="index" />
  </div>
</template>

<script>
import ProductsComponent from "src/components/Products.vue"

export default {
  name: 'ProductsListComponent',
  components: {
    ProductsComponent,
  },
  setup() {
    return {
      items: [
        {
          "name": "Elkika Ilmenau",
          "image": "https://www.elkika.cl/wp-content/uploads/2016/03/Lomo-italiano-baja-1.jpg"
        },
        {
          "name": "Gracielo bar",
          "image": "https://www.800.cl/galeriasitios/Och/2023/3/21/Och__800-Gracielo-Bar-2023-01-GF-lugar-F1-IMG_7648.jpg"
        }
       ]
    }
  }
}
</script>
