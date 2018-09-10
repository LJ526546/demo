<template>
  <div v-if="ok">
    <top :titleName="list.name" :class=" fixed == true? 'fixed':''" id="top"></top>
    <div class="goods" :class=" fixed == true ? 'top':''">
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
    <comment :comment="list.comment" v-on:allComment = allComment></comment>
    <transition name="color">
      <color class="bottom" v-if="animate" :item='list' :num='num' v-on:child = child v-on:index = index></color>
    </transition>
    <transition name="mask">
      <div class="mask" v-if="animate" @click="animate = !animate"></div>
    </transition>
    <transition name="color">
      <intro class="intro" v-if="introAnimate" :item='list' @click.native="introAnimate = !introAnimate"></intro>
    </transition>
    <transition name="mask">
      <div class="mask" v-if="introAnimate" @click="introAnimate = !introAnimate"></div>
    </transition>
    <transition name="all">
      <all></all>
    </transition>
  </div>
</template>

<script>
import Top from "@/components/goods/header"
import color from "@/components/goods/color"
import intro from "@/components/goods/intro"
import comment from "@/components/comment/comment"
import all from "@/components/comment/all"
export default {
  data() {
    return {
      list:'',
      ok: false,
      animate:false,
      introAnimate:false,
      color: '颜色分类',
      intro: '',
      num: '',
      fixed: false,
    }
  },
  methods: {
    plus () {
      let num = document.getElementById('num');
      Number(num.value)<this.list.num ? num.value++ : num.value
    },
    minus () {
      let num = document.getElementById('num');
      Number(num.value) <= 1 ? num.value = '' : num.value--
    },
    child (child) {
      this.animate = child
    },
    index (index){
      if(index !== -1){
        this.num = index
        this.animate = !this.animate
        this.list.color[index]
        this.color = this.list.color[index].type
        this.list.price = this.list.color[index].price
      }else{
        alert('尚未选择颜色！')
      }
    },
    scroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const top = document.getElementById('top')
      if(top === null){
      }else{
        const top1 = top.offsetTop
        scrollTop>top1 ? this.fixed = true : this.fixed = false
      }
    },
    allComment (allComment) {
      this.ok = allComment
      this.show = !allComment
    }
  },
  //组件实例创建完成，属性已经绑定，DOM未生成之前执行axios获取模拟数据渲染页面
  created () {
    this.$http.get('static/data.json').then((res) => {
      this.list = res.data.list[this.$route.params.id]
      this.ok = true
    }).catch((err) => {
      console.log(err)
    })
  },
  mounted() {
    window.addEventListener('scroll',this.scroll)
  },
  components: {
    Top,
    color,
    intro,
    comment,
    all
  }
}

</script>

<style scoped lang="less">
@import "../assets/less/common";
.fixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 7.5rem - .27rem - .27rem;
}
.top{
  margin-top: .95rem;
}
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
  border-bottom: .2rem solid #f5f5f5;
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
  position: fixed;
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
  position: fixed;
  bottom: 0;
  min-height: 3rem;
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
