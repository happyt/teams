<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Match msg="Teams App v1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Match from '@/components/Match.vue'

export default {
  name: 'home',
  components: {
    Match
  }
}
</script>
<style>
img {
  height: 100px;
}
</style>
