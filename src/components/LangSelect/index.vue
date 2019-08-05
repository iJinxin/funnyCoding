<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      选择语言
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'LangSelect'
})
export default class LangSelect extends Vue {
  get language() {
    return "";
  }
  private handleSetLanguage(lang: string) {
    this.$i18n.locale = lang;
  }
}
</script>
