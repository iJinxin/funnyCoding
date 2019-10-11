<template>
  <div>
    <!-- 双向数据绑定 -->
    <el-input v-model="content" />
    <p>{{content}}</p>
  </div>
</template>
<script>
import elInput from './el-input.vue'
export default {
  components: {
    elInput
  },
  data() {
    return {
      content: '1234'
    }
  }
}
</script>