<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ProductComponent />
  </div>
</template>

<script>
import ProductComponent from "src/components/Product.vue"

export default {
  name: 'ProductsListComponent',
  setup() {
    return {}
  }
}
</script>
