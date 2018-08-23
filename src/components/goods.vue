<template>
  <div>
    <img :src="key" alt="推荐banner" class="banner">
    <ul>
      <li v-for="(list,index) in list" v-bind:key="index">
        <img :src="list.src" alt="">
        <p>{{ list.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: 2,
        list: [
          {src:"http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",name:'1'},
          {src:"http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",name:'2'},
          {src:"http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",name:'3'},
          {src:"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",name:'4'}
        ]
      }
    },
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
    img{
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
