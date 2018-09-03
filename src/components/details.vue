<template>
  <div>
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
        <p>选择<span>颜色分类</span></p>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <transition name="color">
      <color class="bottom" v-if="animate" @click.native="animate = !animate">

      </color>
    </transition>
    <div class="mask" v-if="animate"></div>
  </div>
</template>

<script>
import Top from "@/components/goods/header.vue"
import color from "@/components/goods/color.vue"
export default {
  data() {
    return {
      list:'',
      ok: false,
      animate:false
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
    color
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
    .intro{
      text-indent: 2em;
      font-size: .2rem;
      color: #999;
      display: block;
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
  height: 4rem;
  width: 100%;
  background: #333;
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
.color-enter,.color-leave-to{
  bottom: -4rem;
}
.color-enter-to,.color-leave{
  bottom: 0;
}

</style>
