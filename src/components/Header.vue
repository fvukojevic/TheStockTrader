<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
          <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown" :class="{open:isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Load</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        isDropdownOpen: false,
      }
    },
    computed: {
      ...mapGetters({
        funds: 'getFunds'
      })
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.getFunds,
          stockPortfolio: this.$store.getters.getStocksPortfolio,
          stocks: this.$store.getters.getStocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>
