<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="check" round
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    check(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false;
        }
      });
    },
    async login() {
      const data = await this.yPost("/user/login", this.loginForm);
      if (data) {
        console.log("登录成功");
        const userid = data.user._id;
        localStorage.setItem("userid", userid);
        this.$router.push({
          name: "Manage"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 400px;
  border: solid 1px #f3f3f3;
  margin: 100px auto;
  padding: 70px;
  box-shadow: 0 3px 10px #eee;
  // border: 1px solid gainsboro;
  .login-btn{
    width: 300px;
  }
}
</style>
