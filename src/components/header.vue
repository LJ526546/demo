<template>
  <div class="header">
    <i class="el-icon-arrow-left" @click="back()"></i>
    <p>{{ titleName }}</p>
    <i></i>
  </div>
</template>

<script>
export default {
  props: {
    titleName: String,
    required: true
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem .27rem;
  background-color: cornflowerblue;
  i{
    color: #fff;
    font-size: .3rem;
  }
  p{
    font-size: .26rem;
    color: #fff;
  }
}
</style>
