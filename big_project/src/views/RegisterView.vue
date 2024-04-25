<script>
export default {
  name: "RegisterView",
  data() {
    return {
      userName: '',
      password: '',
      email: '',
      birthday: '',
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<template>
  <div class="background">
    <div class="register">
      <div class="title">注册</div>
      <div class="main">
        <div class="registerMsg">
          <el-form>
            <el-input v-model="userName" class="inputStyle" type="text" placeholder="用户名"/>
            <el-input v-model="password" class="inputStyle" type="password" placeholder="密码"/>
            <el-input v-model="email" class="inputStyle" type="text" placeholder="邮箱"/>
<!--            <el-input v-model="birthday" class="inputStyle" type="text" placeholder="出生日期"/>-->
            <div class="dateBlock">
              <el-date-picker class="dateBlock"
                  v-model="birthday"
                  type="date"
                  placeholder="出生日期">
              </el-date-picker>
            </div>
          </el-form>
        </div>
        <div class="registerPicture">
          <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="foot">
        <div class="footDiv">注册用户</div>
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
.register {
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
.registerMsg {
  position: absolute;
  left: 40px;
  top: 25px
}
.inputStyle {
  width: 250px;
  margin-bottom: 15px;
  display: block;
}
.dateBlock {
  width: 250px;
}
.registerPicture {
  position: absolute;
  left: 500px;
  top: 35px;
}

.avatar-uploader {
  border: 1px dashed #41414a;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
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