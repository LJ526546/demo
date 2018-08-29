<template>
  <div v-show="ok">
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
      <div class="list">
        <p>选择<span>颜色分类</span></p>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/goods/header.vue"
export default {
  data() {
    return {
      list:'',
      ok: false
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
    Top
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
  padding: .2rem .1rem;
  border-top: .2rem solid #f5f5f5;
  .list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      color: #999;
      font-size: .24rem;
      span{
        margin-left: .3rem;
        color: #333;
        font-size: .26rem;
      }
    }
    i{
      font-size: .26rem;
    }
  }
}
</style>
