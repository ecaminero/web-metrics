<template>
  <q-page>
    <div class="row">
      <div>First column</div>
      <div>Second column</div>
      <div>Third column</div>
    </div>
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
