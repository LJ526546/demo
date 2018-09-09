<template>
  <div class="wrap">
    <div class="comment">
      <div class="top">
        <p>评价({{ this.comment.length }})</p>
        <span :comment="this.comment">查看全部<i class="el-icon-arrow-right"></i></span>
      </div>
      <div class="list">
        <p v-for="(list,index) in this.comment" v-bind:key="index" v-if="index<3">{{ list.goods }}</p>
      </div>
    </div>
    <div class="user">
      <div class="top">
        <img :src="img" alt="">
        <p>{{ name }}</p>
      </div>
      <div class="intro">
        <p>{{ word }}</p>
        <span>{{ time }}&nbsp;&nbsp;类型：{{ color }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      img: '',
      word: '',
      time: '',
      color: ''
    }
  },
  props: {
    comment: {
      type: Array,
      default: '暂无信息'
    }
  },
  created() {
    var len = this.comment.length
    this.img = this.comment[len - 1].img
    this.name = this.comment[len - 1].user
    this.word = this.comment[len - 1].word
    this.time = this.comment[len - 1].time
    this.color = this.comment[len - 1].color
  },
}
</script>

<style scoped lang="less">
@import "../../assets/less/common";
.wrap{
  padding: .3rem;
  .comment{
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        font-size: .3rem;
        color: #333;
      }
      span{
        display: flex;
        align-items: center;
        font-size: .3rem;
        color: @color;
        i{
          font-size: .35rem;
        }
      }
    }
    .list{
      display: flex;
      align-items: center;
      margin-top: .2rem;
      p{
        border-radius: 26px;
        background: #FEE;
        color: #666;
        padding: .1rem .2rem;
        font-size: .26rem;
        margin-right: .2rem;
        text-align: center;
      }
    }
  }
  .user{
    margin-top: .1rem;
    .top{
      display: flex;
      align-items: center;
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
    .intro{
        margin-top: .15rem;
        p{
          font-size: .3rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          -webkit-box-pack: center;
          overflow: hidden;
          margin-bottom: .2rem;
        }
        span{
          font-size: .26rem;
          color: #999;
        }
    }
  }
}
</style>
