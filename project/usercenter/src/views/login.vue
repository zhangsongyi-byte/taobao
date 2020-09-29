<template>
  <div class="regist-container">
    <div class="regist-left">
      <img src="../assets/auth.png" class="regist-img" alt="">
    </div>
    <div class="regist-right">
      <div class="newUser">欢迎登录</div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="用户名:6位以上数字和字母组成"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="regist-tip">
        <span>没有账号?去</span><a href="./regist">注册</a>
      </div>
      <button class="regist-btn" @click="checkData">登录</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name:"login",
  data() {
    return {
      loginForm:{
        username:"",
        password:""
      },
      rules:{
        username:[
          { required: true, message: "请输入6位以上数字和字母", trigger: "blur" }
        ],
        password:[
          { required: true, message: "请输入6位以上的密码", trigger: "blur" }
        ]
      }
    }
  },
  computed: {
   
  },
  methods: {
     ...mapActions([
      'updateInfo'
    ]),
    // 校验数据
    checkData() {
      this.$refs.loginForm.validate(valid => {
        /* valid的值是true或者false */
        if (valid) {
          /* 如果成功的话，调用login函数 */
          this.login();
        } else {
          return false;
        }
      });
    },
    // 登录
    async login() {
      /* 调用接口，获取注册时的用户信息 */
      const data = await this.yPost("/user/login", this.loginForm);
      if (data) {
        const userList=data.user
        this.$router.push({
          name: "HomePage"
        });
        
        /* 性别转换 */
        if(userList.gender===0){
          userList.gender='女'
        }else{
          userList.gender='男'
        }
        console.log(userList)
        /* 接收从接口中获取的用户信息 */
        this.updateInfo(userList)
      }
    }
  }
}
</script>

<style lang="scss">
  .regist-container{
    width: 800px;
    height: 580px;
    box-shadow: 0 3px 10px #ddd;
    margin: 100px auto;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    .regist-left{
      .regist-img{
      width: 400px;
      height: 500px;
    }
    }
    .regist-right{
      width: 400px;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin:0 20px;
      .newUser{
        font-size: 24px;
        font-weight: 700;
        margin-left: 50px;
        margin-bottom: 10px;
      }
      input{
        width: 300px;
        height: 35px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-top: 0px;
        color: #666;
        outline: none;
      }
      select{
        @extend input;
        width: 305px;
        height: 40px;
      }
      .regist-tip{
        margin-left:100px;
        margin-bottom: 10px;
        font-size: 14px;
        span{
          color: #999;
        }
        a{
          text-decoration: none;
          color: #d59bf6;
        }
      }
      .regist-btn{
        margin-left:100px;
        width: 305px;
        height: 35px;
        border: none;
        background-color: #d59bf6;
        color: #fff;
        border-radius: 5px;
      }
    }
    
  }
  
</style>
