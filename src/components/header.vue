<template>
  <div class="el-col el-col-24">
    <div class="top">
      <router-link to="/content" class="logo">
        <img src="../assets/logo.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  display: block;
  img{
    display: block;
    width: 100%
  }
}
</style>
