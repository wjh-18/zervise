<template>

  <div class='login_container'>
    <el-card class="box-card login-form">
      <div slot="header" class="clearfix">
        <span>请登录</span>
      </div>
      <el-form :model='loginForm' status-icon :rules='rules' ref='loginForm' label-width='0' class=''>
        <el-form-item label='' prop='name'>
          <el-input type='text' placeholder='请输入用户名' v-model='loginForm.name' auto-complete='off'>
            <template slot='prepend'>
              <img src='./img/user_icon.png'>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label='' prop='password'>
          <el-input type='password' placeholder='请输入密码' v-model='loginForm.password' auto-complete='off'>
            <template slot='prepend'>
              <img src='./img/password_icon.png'>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label='' class='form-checked'>
          <el-checkbox v-model='loginForm.checked' class='form-checked-lable'>下次自动登录</el-checkbox>
          <el-button type='text' class='form-checked-forget'>忘记密码？</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' @click='submitForm("loginForm")' class='login'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: '中国营商环境指数',
      loginForm: {
        name: '',
        password: '',
        checked: false
      },
      rules: {
        name: [
          {
            required: true,
            message: '请填写用户名',
            trigger: 'blur，change'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写密码',
            trigger: 'blur，change'
          }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>
.login_container {
  position: relative;
  min-height: 520px;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    margin: -20px;
    padding: 20px;
    background: url("http://bpic.588ku.com/back_pic/05/59/05/335b358fd953ded.jpg");
    background-size: 100% 100%;
    opacity: 0.5;
  }
  .login-form {
    position: relative;
    top: 50px;
    width: 500px;
    margin: 0 auto;
    // padding: 20px;
    // background: rgba(255, 255, 255, 0.9);

    .el-card__header {
      border-bottom: 1px solid #c4c7ce;
      font-size: 18px;
    }
  }
}
</style>
