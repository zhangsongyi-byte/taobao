<template>
  <div class="right-container">
    <div class="info-container">
      <div class="info-img">
        <img :src="user.avatar" alt="" />
      </div>
      <div class="info-content">
        <span>姓名：</span><span class="span name">{{ user.username }}</span>
        <span>昵称：</span
        ><span class="span nickname">{{ user.nickname }}</span>
        <span>性别：</span><span class="span gender">{{ user.gender }}</span>
        <span>学校：</span><span class="span school">{{ user.school }}</span>
        <span>密码：</span><span class="span password">{{ passwordStar }}</span>
        <p><button @click="dialogFormVisible = true">修改密码</button></p>
      </div>
    </div>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogFormVisible"
      :append-to-body="true"
      width="400px"
    >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="旧密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.oldPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.newPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="age">
          <el-input
            type="password"
            v-model="ruleForm.checkPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "userinfo",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      list: {},
      dialogFormVisible: false,
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        checkPassword: ""
      },
      rules: {
        oldPassword: [
          { required: true, message: "请输入旧密码", trigger: blur }
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: blur }
        ],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.dialogFormVisible = false;
          this.changePass();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async changePass() {
      let params = {
        oldPassword: this.ruleForm.oldPassword,
        newPassword: this.ruleForm.newPassword
      };
      const pass = await this.yPut("/user/changePassword", params);
      console.log("userinfo pass", pass);
      this.ruleForm = {};
    }
  },
  computed: {
    /* 将密码转换成*显示 */
    passwordStar() {
      return ("" + this.user.password).replace(/./g, "*");
    },
    ...mapState({
      user: state => state.user
    })
  }
};
</script>

<style lang="scss">
.info-container {
  display: flex;
}
.info-content {
  display: flex;
  margin-top: 60px;
  margin-left: 80px;
  flex-wrap: wrap;
  width: 400px;
  span {
    margin-top: 20px;
    margin-right: 30px;
  }
  .span {
    width: 80px;
  }
  .password {
    width: 70px;
    margin-right: 0;
  }
  p {
    margin-top: 20px;
    button {
      background-color: #fff;
      border: none;
      color: rgb(20, 81, 248);
      outline: none;
      cursor: pointer;
    }
  }
}
.info-img {
  margin-top: 50px;
  margin-left: 100px;
  img {
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }
}
</style>
