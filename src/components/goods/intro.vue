<template>
  <div class="intro">
    <h3>详细信息</h3>
    <p>生产地址：{{ item.address }}</p>
    <p>邮政编码：{{ item.code }}</p>
    <p>生产日期：{{ item.date }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key : 'value'
    }
  },
  props: {
    item: Object,
    default: '数据暂无'
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/common";
.intro{
  h3{
    color: #fff;
    padding: .3rem;
    background: @color;
    font-weight: normal;
  }
  p{
    padding: .3rem;
    color: #333;
    font-size: .3rem;
  }
  padding-bottom: .3rem;
}
</style>
