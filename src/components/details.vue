<template>
  <div v-if="ok">
    <top :titleName="list.name"></top>
    <div class="goods">
      <img :src="list.img" alt="">
      <div class="details">
        <p>{{ list.name }}</p>
        <div>
          <span>￥{{ list.price }}</span>
          <strong>月销：1000件</strong>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="list"  @click="animate = !animate">
        <p>选择<span>{{ color }}</span></p>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="list" @click="introAnimate = !introAnimate">
        <p>详细介绍<span></span></p>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <transition name="color">
      <color class="bottom" v-if="animate" :item='list' v-on:child = child v-on:index = index></color>
    </transition>
    <transition name="mask">
      <div class="mask" v-if="animate" @click="animate = !animate"></div>
    </transition>
    <transition name="color">
      <intro class="intro" v-if="introAnimate" @click="introAnimate = !introAnimate"></intro>
    </transition>
    <transition name="mask">
      <div class="mask" v-if="introAnimate" :item='list'></div>
    </transition>
  </div>
</template>

<script>
import Top from "@/components/goods/header.vue"
import color from "@/components/goods/color.vue"
import intro from "@/components/goods/intro.vue"
export default {
  data() {
    return {
      list:'',
      ok: false,
      animate:false,
      introAnimate:false,
      color: '颜色分类',
      intro: ''
    }
  },
  methods: {
    plus () {
      const num = document.getElementById('num');
      Number(num.value)<this.list.num ? num.value++ : num.value
    },
    minus () {
      const num = document.getElementById('num');
      Number(num.value) <= 1 ? num.value = '' : num.value--
    },
    child (child) {
      this.animate = child
    },
    index (index){
      if(index !== -1){
        this.animate = !this.animate
        this.list.color[index]
        this.color = this.list.color[index].type
        this.list.price = this.list.color[index].price
      }else{
        alert('尚未选择颜色！')
      }
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
    Top,
    color,
    intro
  }
}

</script>

<style scoped lang="less">
.goods{
  img{
    width: 100%;
  }
  .details{
    padding: 0 .1rem .2rem;
    p{
      font-size: .34rem;
      color: #333;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .1rem;
      span{
        color: #956bff;
        font-weight: bold;
        font-size: .26rem;
      }
      strong{
        font-size: .26rem;
        color: #999;
      }
    }
  }
}
.wrap{
  border-top: .2rem solid #f5f5f5;
  .list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .3rem;
    p{
      color: #999;
      font-size: .3rem;
      span{
        margin-left: .3rem;
        color: #333;
        font-size: .26rem;
      }
    }
    i{
      font-size: .3rem;
    }
  }
}
.bottom{
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  transition: all .3s;
  z-index: 2;
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  z-index: 1;
}
.intro{
  position: absolute;
  bottom: 0;
  height: 3rem;
  width: 100%;
  background: #fff;
  transition: all .3s;
  z-index: 2;
}
.color-enter,.color-leave-to{
  bottom: -4rem;
}
.color-enter-to,.color-leave{
  bottom: 0;
}
.mask-enter-active, .mask-leave-active {
  transition: opacity .3s;
}
.mask-enter, .mask-leave-to{
  opacity: 0;
}

</style>
