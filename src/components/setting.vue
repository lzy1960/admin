<template>
  <div class="setting">
    <el-card class="simple-card">
      <h2 class="title">基本设置</h2>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" hide-required-asterisk="true" style="width: 25%">
        <el-form-item label="英文名">
          <el-input placeholder="my name"></el-input>
        </el-form-item>
        <el-form-item label="中文名">
          <el-input placeholder="名字"></el-input>
        </el-form-item>
        <el-form-item label="中文名">
          <el-input type="textarea" placeholder="名字"></el-input>
        </el-form-item>
        <el-form-item label="博客地址" prop="blogUrl">
          <el-input v-model="ruleForm.blogUrl"></el-input>
        </el-form-item>
        <el-form-item label="个人邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        blogUrl: ''
      },
      rules: {
        blogUrl: [{
          required: true,
          message: '验证地址必填',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '邮箱地址必填',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        } else {
          return false
        }
      })
    }
  }
}

</script>
<style lang="less" scoped>
.simple-card {
  margin-bottom: 20px;

  .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }
}

</style>
