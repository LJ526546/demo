<template>
  <div class="el-row">
    <Header></Header>
    <div>123</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  data () {
    return {
      msg: '普通页面'
    }
  },
  methods: {
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
