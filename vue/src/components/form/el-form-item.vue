<template>
  <div>
    <!-- label -->
    <!-- slot 表单 -->
    <!-- error message -->
    <p class="input-label">{{label}}</p>
    <slot></slot>
    <p class="error-message" v-if="error">{{error}}</p>

  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  }
}
</script>