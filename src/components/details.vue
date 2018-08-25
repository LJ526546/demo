<template>
  <div v-show="ok">
    <top :titleName="list.name"></top>
    <div class="goods">
      <img :src="list.img" alt="">
        <p>{{ list.name }}</p>
        <div class="price">
          <span>{{ list.price }}</span>
          <div class="update">
            <i class="el-icon-plus" @click="plus()"></i>
            <input type="text" id="num">
            <i class="el-icon-minus" @click="minus()"></i>
          </div>
        </div>
        <span class="intro">{{ list.details }}</span>
    </div>
  </div>
</template>

<script>
import Top from "@/components/header.vue"
export default {
  data() {
    return {
      list:'',
      ok: false
    }
  },
  methods: {
    plus () {
      var num = document.getElementById('num');
      Number(num.value)<this.list.num ? num.value++ : num.value
    },
    minus () {
      var num = document.getElementById('num');
      Number(num.value) <= 1 ? num.value = '' : num.value--
    }
  },
  //组件实例创建完成，属性已经绑定，DOM未生成之前执行axios获取模拟数据渲染页面
  created () {
    this.$http.get('http://localhost:3030/static/data.json').then((res) => {
      this.list = res.data.list[this.$route.params.id]
      this.ok = true
    })
  },
  components: {
    Top
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
    text-indent: 2em;
    color: #333;
  }
  .intro{
    text-indent: 2em;
    font-size: .2rem;
    color: #999;
    display: block;
  }
}
.price{
  display: flex;
  align-items: center;
}
</style>
