<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Base for a small teams app
        </p>    
        <div>{{hometeam}} v {{awayteam}}</div>
      <v-btn
        class="ma-3"
        color="error"
        @click="doSearch"
      >GET INFO</v-btn>
      <div v-if="searching"><i>Searching...</i></div>
  </div>
</template>

<script>
export default {
  name: 'Match',
  props: {
    msg: String
  }, 
  methods: {
    doSearch: function () {
      console.log("search")
      this.$store.dispatch('GET_INFO')
    }
  },
  computed: {
    searching() {
      return this.$store.getters.SEARCHING
    },
    hometeam() {
      return this.$store.getters.HOMETEAM
    },
    awayteam() {
      return this.$store.getters.AWAYTEAM
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
