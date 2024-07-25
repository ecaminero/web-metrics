<template>
  <q-page>
    <div class="row">

    </div>
    <div class="flex flex-center">
      <ProductsComponent  />
    </div>
  </q-page>
</template>

<script setup>
import ProductsComponent from 'src/components/Products.vue'
import { defineOptions } from 'vue'

defineOptions({
  name: 'IndexPage',
  components: {
    ProductsComponent,
  },
  data() {
    return {}
  },
});
</script>
