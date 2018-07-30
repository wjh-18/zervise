<template>

  <div class='contactContainer'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>联系我们</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model='contactForm' status-icon :rules='rules' ref='contactForm' label-width='100px' class="formContainer">
      <el-row>
        <el-col :span="12">
          <el-form-item label='邮箱地址' prop='email'>
            <el-input type='email' placeholder='请输入邮箱' v-model='contactForm.email' auto-complete='off' style="width:80%;">
            </el-input>
            <el-checkbox v-model='contactForm.contact' class='form-checked-lable'>与我联系</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label='名称' prop='name'>
            <el-input type='text' placeholder='请输入名称' v-model='contactForm.name' auto-complete='off'>

            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label='联系电话' prop='phone'>
            <el-input type='text' placeholder='请输入联系电话' v-model='contactForm.phone' auto-complete='off'>

            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label='消息内容' prop='message'>
        <el-input type='textarea' placeholder='请输入消息内容' v-model='contactForm.message' auto-complete='off'>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type='primary' @click='submitForm("contactForm")' class='contact'>提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      title: 'contactUs',
      contactForm: {
        name: '',
        email: '',
        contact: true,
        message: ''
      },
      rules: {
        email: [
          {
            type: 'email',
            required: true,
            message: '请填写有效的邮箱地址',
            trigger: 'blur'
          },
          {
            type: 'email',
            trigger: 'change',
            message: '请填写有效的邮箱地址'
          }
        ],
        message: [
          {
            required: true,
            message: '请填写消息内容',
            trigger: 'blur,change'
          },
          {
            min: 30,
            message: '请输入大于30字符长度的消息内容',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(form) {
      let vm = this
      vm.$refs[form].validate(valid => {
        if (valid) {
          vm.$http
            .post('https://www.zervice.us/public/message', vm.contactForm)
            .then(res => {
              this.$message({
                message: res.message,
                type: 'success'
              })
            })
            .catch(res => {
              this.$message({
                message: res.message,
                type: 'error'
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='less'>
.contactContainer {
  position: relative;
  min-height: 520px;
  width: 1200px;
  margin: 0 auto;
  .contact-form {
    position: relative;
    top: 50px;
    width: 500px;
    margin: 0 auto;
  }

  .formContainer {
    padding: 50px;
  }
  textarea {
    width: 80%;
    height: 200px;
  }
  .el-button {
    float: left;
    width: 300px;
    // margin-left:100px;
  }
}
</style>
