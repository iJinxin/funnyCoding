<template>
  <div class="course_plan_container">
    <div class="course_plan__title">
      <h2>课程计划</h2>
    </div>
    <div class="course_plan__link"><a>查看更多</a></div>
    <div class="course_plan__content display_flex">
      <div class="content_cover display_flex flex_direction__column">
        <div class="content_cover__course flex_1 display_flex
        flex_direction__column align-items__center justify-content__center">
          <h3>大神古风摄影教学精髓篇</h3>
          <div class="course_date">
            <span>距离培训22时49分30秒</span>
          </div>
        </div>
        <div class="content_cover__author display_flex justify-content__space-between">
          <div class="author_info display_flex align-items__center">
            <img class="author_info__logo"/>
            <span class="author_info__name">知竹zZ</span>
          </div>
          <div class="course_classify">
            <span class="course_classify__name">课程来自: 平面设计/摄影</span>
          </div>
        </div>
      </div>
      <div class="plan_list">
        <ul class="reset_ul">
          <template v-for="plan in planList">
            <li :key="plan.id" class="plan_list__item pointer display_flex">
              <span class="item_date">{{plan.date}}</span>
              <span class="item_time">{{plan.time}}</span>
              <span class="item_title text-truncate">{{plan.title}}</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursePlan',
  data() {
    return {
      planList: [
        { id: 1, date: '今天', time: '18:50', title: '用Python自动化办公，做职场高手', type: '' },
        { id: 2, date: '今天', time: '19:50', title: '用Python自动化办公，做职场高手', type: '【直播】' },
        { id: 3, date: '明天', time: '18:50', title: '新媒体营销，做职场高手', type: '' },
        { id: 4, date: '明天', time: '19:50', title: '大神古风摄影教学精髓片', type: '' },
        { id: 5, date: '12-30', time: '18:50', title: '玩转HTML5前端+跨平台开发', type: '' },
      ],
    };
  },
};
</script>

<style lang="scss">
  .course_plan_container {
    width: 100%;
    height: 100%;
    .course_plan__title {
      text-align: center;
    }
    .course_plan__link {
      position: absolute;
      right: 0;
      top: 40px;
      font-size: 12px;
      cursor: pointer;
    }
    .course_plan__content {
      width: 100%;
      height: 348px;
    }
  }

  .course_plan_container .content_cover {
    width: 620px;
    height: 348px;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
    .content_cover__course {
      position: relative;
      z-index: 10;
      h3 {
        font-size: 18px;
        margin: 14px 0;
        color: #fff;
      }
      .course_date {
        font-size: 12px;
        color: $white;
        padding: 2px 8px;
        border-radius: 11px;
        background: rgba(0, 0, 0, 0.6);
        letter-spacing: 1.5px;
      }
    }
    .content_cover__author {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 36px;
      line-height: 36px;
      background: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      color: $white;
      .author_info {
        margin-left: 12px;
        .author_info__logo {
          width: 24px;
          height: 24px;
          border-radius: 12px;
          padding-top: 1px;
        }
        .author_info__name {
          display: inline-block;
          padding-top: 3px;
          padding-left: 6px;
        }
      }
      .course_classify {
        margin-right: 12px;
        .course_classify__name {
          display: inline-block;
          padding-top: 3px;
          padding-left: 6px;
        }
      }
    }
  }

  .course_plan_container .plan_list {
    width: 580px;
    height: 100%;
    background: $lightgray2;
    .plan_list__item {
      height: 49px;
      line-height: 49px;
      font-size: 14px;
      border-left: 4px solid $lightgray2;
      transition: background-color .3s, border-left-color .3s;
      &:hover {
        background-color: $white;
        border-left-color: $blue;
      }
      .item_date {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 71px;
        padding-left: 24px;
        color: $gray;
        transition: color .3s;
        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          z-index: 10;
          top: 0;
          right: 0;
          height: 100%;
          width: 1px;
          background-image: linear-gradient(to bottom, #E8E8E8 0%, #E8E8E8 33.3%, transparent 33.4%, transparent 100%);
          background-size: 1px 6px;
          background-repeat: repeat-y;
        }
        &::after {
          content: "";
          position: absolute;
          top: 22px;
          right: -3px;
          z-index: 10;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: $gray;
        }
      }
      .item_time {
        display: inline-block;
        width: 93px;
        text-align: center;
        color: $gray;
      }
      .item_title {
        display: inline-block;
        max-width: 320px;
        color: $dark;
      }
    }
    .plan_list__item:hover {
      .item_date,
      .item_time,
      .item_title {
        color: $blue;
      }
      .item_date::after {
        background: $blue;
      }
    }
  }
</style>
