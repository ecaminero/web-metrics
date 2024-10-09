<template>
  <q-page>
    <div class="flex flex-center">
      <ProductsComponent  />
    </div>
  </q-page>
</template>

<script setup>
import ProductsComponent from 'components/Products.vue'

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
