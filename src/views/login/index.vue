<!--
 * @功能描述: 
 * @版本: 
 * @作者: 张亮三
 * @Date: 2020-04-12 10:12:45
 * @最新修改内容: 
 * @LastEditTime: 2020-04-12 10:13:03
 -->
<template>
  <div class="login">
    <el-card class="box-card w-50" >
      <div slot="header" class="clearfix">
        <h4 class="card-header-title text-center">商城管理系统</h4>
      </div>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="iconfont icon-ico_username"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password">
            <i slot="prefix" class="iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-100" type="primary" @click="login('loginForm')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
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
      loginRules: {
        username: [{
          required: true, message: '请输入用户名称', trigger: 'blur' 
        }],
        password: [{
          required: true, message: '请输入用户密码', trigger: 'blur' 
        }]
      }
      
    };
  },
  methods: {
    login(forname) {
      this.$refs[forname].validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "恭喜你，这是一条成功消息",
            type: "success"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg (2).jpg') no-repeat center center;
  background-size: 100% 100%;
}
.box-card {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
</style>