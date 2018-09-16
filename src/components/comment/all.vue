<template>
  <div>
    <div class="list" ref="list">
      <p v-for="(list,index) in list" :key = index @click="show(index)" :class="num === index ? 'cur' : ''">{{ list.type }}({{ list.wrap.length }})</p>
    </div>
    <div class="tabs" v-for="(item,index) in list" :key = index v-if="num !== '' ? num === index : num === ''">
      <div class="item" v-for="(wrap,index) in item.wrap" :key = index>
        <div class="top">
          <img :src="wrap.img" alt="">
          <p>{{ wrap.user }}</p>
        </div>
        <p class="time">{{ wrap.time }}</p>
        <span>{{ wrap.word }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : '',
      num : ''
    }
  },
  methods: {
    show (index) {
      this.num = index
    }
  },
  props: {
    allMsg: {
      type: Array,
      default: '暂无信息'
    }
  },
  created() {
    this.list = this.allMsg
  },
}
</script>

<style scoped lang="less">
@import "../../assets/less/common";
.list{
  display: flex;
  flex-wrap: wrap;
  margin: .2rem auto;
  width: 7.3rem;
  max-height: 1.3rem;
  p{
    border-radius: 26px;
    background: #FEE;
    color: #666;
    padding: .1rem .2rem;
    font-size: .26rem;
    margin-right: .2rem;
    text-align: center;
    margin-bottom: .1rem;
  }
  .cur{
    background: #e28080;
    color: #fff;
  }
}
.tabs{
  .item{
    border-bottom: .1rem solid #f5f5f5;
    padding: .2rem .3rem;
    .top{
      display: flex;
      align-items: center;
      margin-bottom: .2rem;
      img{
        width: .8rem;
        border-radius: 50%;
        background: @color;
      }
      p{
        font-size: .28rem;
        margin-left: .2rem;
      }
    }
    .time{
      font-size: .26rem;
      color:#999;
      margin-bottom: .2rem;
    }
    span{
      font-size: .28rem;
      color: #333;
      text-indent: 2em;
      display: block;
    }
  }
}
</style>
