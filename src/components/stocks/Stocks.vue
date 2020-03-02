<template>
  <div>
    <app-stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock">

    </app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks() {
        console.log(this.$store);
        return this.$store.getters.getStocks;
      }
    }
  }
</script>
