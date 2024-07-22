<template>
  <q-page class="flex flex-center">
    <ProductComponent 
      v-for="(item, index) in items" 
      :key="item"
      :index="index"
      />
  </q-page>
</template>

<script setup>
import ProductComponent  from "src/components/Product.vue"
import { defineOptions } from 'vue'
defineOptions({
  name: 'IndexPage',
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  components: {
    ProductComponent,
  }
});
</script>
