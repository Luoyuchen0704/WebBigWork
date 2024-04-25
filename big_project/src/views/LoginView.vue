<script>
export default {
  name:"LoginView",
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    quickLogin(msg) {
      this.$router.push('/home')
    },
    login() {},
    register() {},
    forgotPassword() {},
  }
}
</script>

<template>
  <div class="background">
    <div class="login">
      <h1 class="title">登录</h1>
      <div class="main">
        <div class="quickLogin">
          <div class="singleStyle qq"
               @click="quickLogin('QQ登录成功')">
            <img class="iconStyle" src="@/assets/qq.png" alt="">
            <p>QQ登录</p>
          </div>
          <div class="singleStyle wechat"
               @click="quickLogin('微信登录成功')">
            <img class="iconStyle" src="@/assets/wechat.png" alt="">
            <p>  微信登录</p>
          </div>
          <div class="singleStyle pay"
               @click="quickLogin('支付宝登录成功')">
            <img class="iconStyle" src="@/assets/pay.png" alt="">
            <p>  支付宝登录</p>
          </div>
        </div>
        <div class="normalLogin">
          <el-form>
            <el-input v-model="userName" class="inputStyle" type="text" placeholder="用户名"/>
            <el-input v-model="password" class="inputStyle" type="password" placeholder="密码"/>
            <el-button class="btn" @click="login">登录</el-button>
          </el-form>
        </div>
      </div>
      <div class="foot">
<!--        <div class="footDiv">注册用户</div>-->
        <router-link to="/register" class="footDiv">注册用户</router-link>
<!--        <div class="footDiv">修改密码</div>-->
        <router-link to="/change" class="footDiv">修改密码</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../assets/background.png");
  position: absolute;
  width: 100%;
  height: 100%;
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 320px;
  background-color: gainsboro;
  margin: auto;
}
.title {
  text-align: center;
  margin: 0 auto;
  font-size: 26px;
  color: black;
  background-color: gainsboro;
  padding: 5px;
}
.main {
  position: absolute;
  width: 800px;
  height: 250px;
  background-color: gainsboro;
  margin: 0 auto;

}
.iconStyle {
  position: absolute;
  margin-top: 5px;
  width: 30px;
  height: 30px;
  left: 10px;
}
.wechat .iconStyle {
  width: 40px;
  height: 40px;
  left: 5px;
  margin-top: 2px;
}

.quickLogin {
  position: absolute;
  left: 30px;
  top: 10px;
}
.singleStyle {
  margin-bottom: 10px;
  width: 300px;
  height: 40px;
  font-size: 20px;
}
.singleStyle p {
  position: relative;
  top: 5px;
  left: 50px;
  text-align: left;
}
.qq {
  background-color: #0599c2;
}
.wechat {
  background-color: #01bd6f;
}
.pay {
  background-color: #8f8f8f;
}

.normalLogin {
  position: absolute;
  left: 450px;
  top: 30px;
}
.inputStyle {
  width: 250px;
  margin-bottom: 15px;
}
.btn {
  position: relative;
  display: block;
  left: 100px;
}

.foot {
  position: absolute;
  top: 280px;
}
.footDiv {
  width: 400px;
  height: 40px;
  background-color: #41414a;
  display: inline-block;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
}
@media (max-width: 800px) {
  .main {
    display: flex;
    flex-direction: column;
  }
  .quickLogin, .normalLogin {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }

}
</style>