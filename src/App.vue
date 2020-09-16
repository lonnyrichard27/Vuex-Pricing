<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/Product-list-one';
import ProductListTwo from '@/components/Product-list-two'

export default {
  name: "App",
  components: {
    ProductListOne,
    ProductListTwo
  },
  data () {
    return {
      
    }
  }

};
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
