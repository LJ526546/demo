<template>
  <div>
    <div class="list" ref="list">
      <p v-for="(list,index) in list" :key = index>{{ list.goods }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : ''
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
    this.$nextTick(() =>{
      console.log(this.$refs.list.scrollHeight)
    })
  },
}
</script>

<style scoped lang="less">
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
}
</style>
