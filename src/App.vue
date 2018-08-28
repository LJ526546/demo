
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/goods.vue'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style lang="css">
@import "/assets/css/reset.css";
</style>
