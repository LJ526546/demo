<template>
  <div class="from">
    <h3>登录用户</h3>
    <p>用户名：<input type="text" id="user" placeholder="请输入用户名"></p>
    <p>密<span>隐</span>码：<input type="password" id="psd" placeholder="请输入密码"></p>
    <button v-on:click='login()'>登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nam: 1
    }
  },
  methods: {
    login () {
      var userVal = document.getElementById('user').value
      var psdVal = document.getElementById('psd').value
      if (!userVal || !psdVal) {
        this.$notify({
          message: '用户名或密码错误',
          offset: 100,
          duration: 2000
        })
      } else if (userVal === '1' && psdVal === '1') {
        this.$router.isLogin = true
        this.$router.push({path: '/admin'})
      } else {
        this.$router.isLogin = true
        this.$router.push({name: 'content', params: {id: userVal}})
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.from{
  width: 5.6rem;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: .3rem 0;
  border: 1px solid #1685b9;

  h3{
    font-size: .3rem;
    text-align: center;
    color: #333;
    font-weight: normal;
  }
  p{
    margin: .15rem 0;
    font-size: .16rem;
    color: #333;
    span{
      visibility: hidden;
    }
    input{
      width: 2.3rem;
      padding: .05rem 0;
      border-radius: 3px;
      background:transparent;
      border: 1px solid #999;
      text-indent: 1em;
      font-size: .16rem;
    }
    input:hover{
      border-color:#40a7d6;
    }
  }
  button{
    width: 1.3rem;
    padding: .05rem 0;
    border: none;
    background: #1685b9;
    color:#fff;
    text-align: center;
    border-radius: 3px;
    margin-top: .3rem;
  }
}
</style>
