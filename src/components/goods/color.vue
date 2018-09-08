<template>
  <div>
    <div class="btn">
      <a href="javascript:;" @click="cancel()">取消</a>
      <a href="javascript:;" @click="sure()">确定</a>
    </div>
    <div class="list" v-for="(list,index) in item.color" v-bind:key="index" @click="num(index)">
      <i class="el-icon-check" v-show="index === i"></i>
      <p>{{ list.type }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key : '1',
      i: -1,
    }
  },
  props:{
    item: {
      type: Object,
      default: '数据暂无'
    },
    a: [String, Number]
  },
  methods: {
    num (index) {
      this.i = index
    },
    sure () {
      this.$emit('index',this.i)
    },
    cancel () {
      this.$emit('child',false)
    }
  },
  created() {
    this.a !== '' ? this.i = this.a : ''
  },
}
</script>

<style scoped lang='less'>
.btn{
  display: flex;
  align-items: center;
  padding: .3rem;
  justify-content: space-between;
  background: #ca0c16;
  a{
    color: #fff;
    font-size: .3rem;
  }
}
.list{
  padding: .3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  position: relative;
  border-bottom: 1px solid #ccc;
  i{
    position: absolute;
    left: .2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: .4rem;
    margin-right: .2rem;
  }
  p{
    font-size: .3rem;
  }
}
</style>
