<template>
  <div>
    <img :src="key" alt="推荐banner" class="banner">
    <ul>
      <li v-for="(list,index) in list" v-bind:key="index">
        <router-link :to="{name:'details',params:{id:index}}">
          <img :src="list.img" alt="">
          <p>{{ list.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: 2,
        list: ''
      }
    },
    created () {
      this.$http.get('http://localhost:3030/static/data.json').then((res) => {
        this.list = res.data.list
        console.log(res.data.list)
      })
    }
  }
</script>

<style scoped lang="less">
.banner{
  width: 100%;
  height: 1.3rem;
  background-color: salmon;
  display: block;
}
ul{
  display: flex;
  flex-wrap: wrap;
  li{
    text-align: center;
    width: 50%;
    a{
      display: block;
      img{
        width: 75%;
        display: block;
        margin: 0 auto;
      }
      p{
        font-size: .3rem;
        color: #333;
      }
    }
    
  }
}
</style>
