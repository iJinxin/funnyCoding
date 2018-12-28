<template>
  <div class="note note-v1">
    <div class="note-inner">
      <section class="note-header">
        <span>知行合一，止于至善</span>
        <i class="iconfont ali-icon-write pointer" @click="addNote()"></i>
      </section>
      <section class="note-content">
        <template v-for="note in noteList">
          <div :key="note._id" class="note-item display_flex flex_direction__column">
            <div>
              <span class="note-item__date">{{note.date}}</span>
              <button class="note-item__button text gray" @click="removeNote(note._id)">删除</button>
            </div>
            <span class="note-item__content">{{note.content}}</span>
          </div>
        </template>
      </section>
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
  </div>
</template>

<script>
import CookieHandler from '@/utils/cookieHandler';
import { $get, $post, $delete } from '../../api/http';
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
      noteList: [],
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
        [...this.noteList] = res;
        this.initYears();
      });
    },
    initYears() {
      if (this.noteList.length) {
        const firstYear = this.noteList[0];
        firstYear.marked = true;
        let currentYear = new Date(this.noteList[0].timestamp).getFullYear();
        this.noteList.forEach((item) => {
          const date = new Date(item.timestamp);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          item.year = year;
          item.date = `${year}-${month}-${day}`;
          if (year !== currentYear) {
            item.marked = true;
            currentYear = year;
          }
        });
      }
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
    removeNote(noteId) {
      $delete($api.delete_note, { nodeId: noteId }).then(() => {
        this.queryNotes();
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
  .note-inner {
    width: 500px;
    margin: 0 auto;
  }
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
  .note-content {
    .note-year {
      font-size: 18px;
    }
    .note-item {
      margin: 5px 0;
      padding: 15px;
      .note-item__date {
        font-size: 12px;
        color: $gray;
        position: relative;
        padding-left: 8px;
        &::before {
          content: "";
          display: block;
          background: $gray;
          width: 2px;
          height: 13px;
          border-radius: 1px;
          position: absolute;
          left: 0;
          top: 3px;
          z-index: 1;
          transition: background-color 0.3s;
        }
      }
      .note-item__button {
        margin-left: 15px;
        font-size: 12px;
        display: none;
        &:hover {
          color: $babyblue;
        }
      }
      .note-item__content {
        padding-left: 6px;
      }
    }
    .note-item:hover {
      .note-item__date::before {
        background: $babyblue;
      }
      .note-item__button {
        display: inline-block;
      }
    }
  }
}
</style>
