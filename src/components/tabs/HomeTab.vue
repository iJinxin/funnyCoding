<template>
  <el-tabs v-model="activeName" class="home_tab">
    <el-tab-pane label="最新资料" name="latest_information" class="latest_information">
      <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap">
        <ul class="reset_ul">
          <template v-for="info in latestInformation">
            <li class="list_item" :key="info.title">
              <a class="list_item__link text-truncate">{{info.title}}</a>
            </li>
          </template>
        </ul>
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="优秀讲师" name="best_teacher" class="best_teacher">
      <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap">
        <ul class="reset_ul">
          <template v-for="info in latestInformation">
            <li class="list_item" :key="info.title">
              <a class="list_item__link text-truncate">{{info.title}}</a>
            </li>
          </template>
        </ul>
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="交流中心" name="communication_center" class="communication_center">
      <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap">
        <ul class="reset_ul">
          <template v-for="info in latestInformation">
            <li class="list_item" :key="info.title">
              <a class="list_item__link text-truncate">{{info.title}}</a>
            </li>
          </template>
        </ul>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'HomeTabs',
  data() {
    return {
      activeName: 'latest_information',
      latestInformation: [
        {
          title: '消费升级，从双十一看待IT职业1',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业2',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业3',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业4',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业5',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业6',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业7',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业8',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业9',
          link: '',
        },
        {
          title: '消费升级，从双十一看待IT职业消费升级，从双十一看待IT职业',
          link: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .home_tab {
    .el-tabs {
      height: 218px;
      margin-bottom: 2px;
      border-radius: 2px;
    }

    .el-tabs__nav {
      display: flex;
      justify-content: space-around;
      float: none;
    }

    .el-tabs__active-bar {
      display: none;
    }

    .el-tabs__item.is-active {
      border-bottom: 2px solid $babyblue;
      color: $dark;
    }
    .el-tabs__header {
      margin-bottom: 5px;
    }
    .el-tabs__item {
      height: 28px;
      line-height: 28px;
      flex: 1;
      padding: 0;
      text-align: center;
      font-size: 12px;
      color: $dark;
      &:hover {
        color: $babyblue;
      }
    }
    #pane-latest_information,
    #pane-best_teacher,
    #pane-communication_center {
      height: 187px;
    }
    .latest_information,
    .best_teacher,
    .communication_center {
      .list_item {
        height: 28px;
        line-height: 28px;
        padding-left: 20px;
        font-size: 12px;
        .list_item__link {
          display: block;
        }
        & + .list_item {
          .list_item__link {
            border-top: 1px solid #E8E8E8;
          }
        }
      }
    }
  }


</style>
