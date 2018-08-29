<template>
  <div>
    <el-carousel :interval="4000" type="card" height="3.75rem" class="banner">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="../assets/logo.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <ul class="list">
      <li v-for="(item,index) in item" v-bind:key="index">
        <div></div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
    <goods></goods>
  </div>
</template>

<script>
import Goods from '@/components/goods.vue'
export default {
  data () {
    return {
      ok:false,
      item: [
        {name: '列表1'},
        {name: '列表2'},
        {name: '列表3'},
        {name: '列表4'},
        {name: '列表5'},
        {name: '列表6'},
        {name: '列表7'},
        {name: '列表8'},
      ]
    }
  },
  components: {
    Goods
  }
}
</script>

<style scoped lang="less">
.banner{
  img{
    width: 100%;
  }
}
.list{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  li{
    width: 25%;
    text-align: center;
    margin-bottom: .1rem;
    div{
      width: 1rem;
      border-radius: 50%;
      background-color: red;
      height: 1rem;
      margin: 0 auto .1rem;
    }
    p{
      font-size: .2rem;
      color: #333;
    }
  }
}
</style>
