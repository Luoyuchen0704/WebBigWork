<script>
export default {
  name: "ChangePasView",
  data() {
    return {
      userName: '',
      password: '',
      newPassword: '',
      newPasswordConfirm: '',
    }
  }
}
</script>

<template>
  <div class="background">
    <div class="change">
      <div class="title">修改密码</div>
      <div class="main">
        <div class="pasChangeL">
          <el-form>
            <el-input v-model="userName" class="inputStyle" type="text" placeholder="用户名"/>
            <el-input v-model="password" class="inputStyle" type="password" placeholder="旧密码"/>
          </el-form>
        </div>
        <div class="pasChangeR">
          <el-form>
            <el-input v-model="newPassword" class="inputStyle" type="password" placeholder="新密码"/>
            <el-input v-model="newPasswordConfirm" class="inputStyle" type="password" placeholder="再次确认新密码"/>
          </el-form>
        </div>
      </div>
      <div class="foot">
        <div class="footDiv">修改密码</div>
        <router-link to="/" class="footDiv">返回登录</router-link>
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
.change {
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
  font-size: 20px;
  color: black;
  background-color: gainsboro;
  height: 30px;
}
.main {
  position: absolute;
  width: 800px;
  height: 250px;
  background-color: azure;
  margin: 0 auto;
}
.pasChangeL {
  position: absolute;
  left: 40px;
  top: 40px;
}
.inputStyle {
  width: 250px;
  margin-bottom: 15px;
  display: block;
}
.pasChangeR {
  position: absolute;
  left: 500px;
  top: 40px;
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
</style>