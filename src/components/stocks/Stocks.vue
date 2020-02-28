<template>
  <div>
    <app-stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock">

    </app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks : [
          {
            id: 1,
            name: 'BWM',
            price: 110,
          },
          {
            id: 2,
            name: 'Google',
            price: 200,
          },
          {
            id: 3,
            name: 'Apple',
            price: 250,
          },
          {
            id: 4,
            name: 'Twitter',
            price: 50,
          }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
