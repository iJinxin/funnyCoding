<template>
  <div class="note note-v1">
    <section class="note-header">
      <span>知行合一，止于至善</span>
      <i class="iconfont ali-icon-write pointer" @click="addNote()"></i>
    </section>
    <section class="note-content"></section>
    <el-dialog title="添加note" :visible.sync="addNoteVisible">
      <el-form :model="noteForm" :rules="rules" ref="noteForm">
        <el-form-item prop="noteContent">
          <el-input type="textarea" v-model="noteForm.noteContent"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button class="primary small" @click="submit('noteForm')">确定</button>
        <button class="info small" @click="cancel()">取消</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CookieHandler from '@/utils/cookieHandler';
import { $get, $post } from '../../api/http';
import $api from '../../api/api';

export default {
  name: 'Article',
  data() {
    return {
      addNoteVisible: false,
      noteForm: {
        noteContent: '',
      },
      rules: {
        noteContent: [
          { required: true, message: '是不是忘了点什么？', trigger: 'blur' },
          { max: 160, message: 'too long to hold on', trigger: 'change' },
        ],
      },
    };
  },
  created() {
    this.queryNotes();
  },
  methods: {
    addNote() {
      this.addNoteVisible = true;
    },
    queryNotes() {
      const USER_ID = CookieHandler.get('USER_ID');
      $get($api.query_notes, { userId: USER_ID }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const USER_ID = CookieHandler.get('USER_ID');
          const body = {
            userId: USER_ID,
            content: this.noteForm.noteContent,
          };
          $post($api.add_note, body).then(() => {
            this.$message.success('添加成功');
            this.noteForm.noteContent = '';
            this.addNoteVisible = false;
          }).catch(() => {
            this.$message.error('添加失败');
            this.addNoteVisible = false;
          });
        }
      });
    },
    cancel() {
      this.addNoteVisible = false;
    },
  },
};
</script>

<style lang="scss">
.note-v1 {
  width: 720px;
  margin: 0 auto;
  .note-header {
    position: relative;
    height: 56px;
    line-height: 56px;
    text-align: center;
    > span {
      font-size: 18px;
    }
    >i {
      position: absolute;
      right: 0;
      z-index: 1;
      padding: 0 15px;
      font-size: 16px;
    }
  }
  .el-dialog {
    width: 550px;
  }
  .el-dialog__body {
    padding: 10px 20px;
  }
  .el-textarea__inner {
    height: 120px;
    font-size: 14px;
    font-family: $global-font-family;
  }
}
</style>
