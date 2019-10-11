<template>
  <div>
    <el-form-item label="名称">
      <el-input />
    </el-form-item>
    <el-form-item label="密码">
      <el-input/>
    </el-form-item>
    <el-form-item>
      <button>登录</button>
    </el-form-item>
  </div>
</template>
<script>
import elFormItem from './el-form-item.vue'
import elInput from './el-input.vue'
export default {
  components: {
    elFormItem, elInput
  }
}
</script>