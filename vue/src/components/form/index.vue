<template>
  <div>
    <el-form>
      <el-form-item label="名称">
        <el-input placeholer="请输入名称" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" />
      </el-form-item>
      <el-form-item>
        <button>登录</button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import elForm from './el-form.vue'
import elFormItem from './el-form-item.vue'
import elInput from './el-input.vue'
export default {
  components: {
    elForm, elFormItem, elInput
  }
}
</script>