<template>
  <div class="regist-container">
    <div class="regist-left">
      <img src="../assets/auth.png" class="regist-img" alt="">
    </div>
    <div class="regist-right">
      <div class="newUser">注册新用户</div>
      <el-form :model="registForm" status-icon :rules="rules" ref="registForm" label-width="100px" class="demo-registForm">
        <el-form-item prop="username">
          <el-input type="text" v-model="registForm.username" autocomplete="off" placeholder="用户名:6位以上数字和字母组成"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="registForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="school">
          <el-input type="text" v-model="registForm.school" autocomplete="off" placeholder="学校"></el-input>
        </el-form-item>
        <el-form-item prop="nickname">
          <el-input type="text" v-model="registForm.nickname" autocomplete="off" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop="age">
          <el-input type="text" v-model="registForm.age" autocomplete="off" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item prop="gender">
          <el-select v-model="registForm.gender" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="regist-tip">
        <span>已有账号?去</span><a href="./login">登录</a>
      </div>
      <button class="regist-btn" @click="checkData">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"regist",
  data() {
    return {
      registForm:{
        username:"",
        password:"",
        school:"",
        nickname:"",
        age:null,
        gender:""
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
  methods:{
    /* 校验注册 */
    checkData() {
      this.$refs.registForm.validate(valid => {
        if (valid) {
          this.regist();
        } else {
          return false;
        }
      });
    },
    /* 注册 */
    async regist(){
      const data=await this.yPost("/user/regist",this.registForm)
      if(data){
        // console.log(data);
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
      margin:0 20px;
      // background-color: rebeccapurple;
      .newUser{
        font-size: 24px;
        font-weight: 700;
        margin-left: 50px;
        // text-align: center;
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
