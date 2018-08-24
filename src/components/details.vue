<template>
  <div>
    <div class="goods">
      <img :src="list.img" alt="">
        <p>{{ list.name }}</p>
        <div class="price">
          <span>{{ list.price }}</span>
          <div class="update">
            <i></i>
          </div>
        </div>
        <span class="intro">{{ list.details }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:''
    }
  },
  //组件实例创建完成，属性已经绑定，DOM未生成之前执行axios获取模拟数据渲染页面
  created () {
    this.$http.get('http://localhost:3030/static/data.json').then((res) => {
      this.list = res.data.list[this.$route.params.id]
    })
  }
}

</script>

<style scoped lang="less">
.goods{
  img{
    width: 100%;
  }
  p{
    font-size: .24rem;
    text-align: center;
  }
  .intro{
    text-indent: 2em;
    font-size: .2rem;
    color: #999;
    display: block;
  }
}
</style>
