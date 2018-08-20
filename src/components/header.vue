<template>
  <div class="el-col el-col-24">
    <div class="top">
      <router-link to="/content" class="logo">
        <img src="../assets/school.png" alt="">
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
.top{
  background-image: url(../assets/line.png)
}
.logo{
  display: block;
  img{
    display: block;
    width: 100%
  }
}
</style>
