<template>
  <ul :class="$style.container" class="reset_ul clearfix">
    <template v-for="course in courseList">
      <li :key="course.id" :class="$style.course_item">
        <div :class="$style.course_item__cover" ref="course_item" v-bind:style="{backgroundImage: `url(${course.cover})`}">
          <template v-if="course.type==='live'">
            <div :class="$style.course_live__status">
              <span :class="$style.status_text">{{ course.liveStatus | dict('LIVE_STATUS') }}</span>
            </div>
          </template>
          <template v-else>
            <div :class="$style.course_learning_progress" class="display_flex justify-content__center align-items__center">
              <div :class="$style.progress_inner" ref="progress_inner" v-bind:style="{width: `${course.progress}%`}"></div>
              <span :class="$style.progress_text">{{ course.progress + '%'}}</span>
            </div>
          </template>
        </div>
        <div :class="$style.course_item__info">
          <div :class="$style.course_title" class="text-truncate">{{course.title}}</div>
          <div :class="$style.other_info" class="display_flex justify-content__space-between">
            <div class="display_flex align-items__center">
              <img :class="$style.author_logo" v-bind:src="course.logo">
              <span :class="$style.author_name" class="text-truncate">{{course.author}}</span>
            </div>
            <div :class="$style.other_info_audience" class="display_flex justify-content__flex-end align-items__center">
              <i></i>
              <span :class="$style.audience_count">{{course.count}}</span>
            </div>
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
/**
 * 若initialCourseList长度为0，按理不应该渲染组件，而是加载提示图片
 * 数据的判断放在渲染组件之前
 */
import courseItem from './CourseItem';

export default {
  name: 'CourseList',
  props: {
    initialCourseList: Array,
  },
  components: {
    courseItem,
  },
  computed: {
    courseList() {
      return [...this.initialCourseList];
    },
  },
};
</script>

<style lang="scss" module>
  .container {
    margin-left: -8px;
    margin-right: -8px;
  }
  .course_item {
    width: 288px;
    height: 236px;
    border: 1px solid $white;
    padding: 8px;
    float: left;
    &:hover {
      background: #FFFFFF;
      border: 1px solid #F6F6F6;
      box-shadow: 0 2px 3px 0 #E8E8E8;
    }
  }

  // course cover
  .course_item__cover {
    width: 100%;
    height: 163px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .course_live__status {
    height: 24px;
    line-height: 24px;
    padding: 0 7px 0 19px;
    position: absolute;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background: $pink;
  }

  .status_text {
    font-size: 12px;
    color: $white;
    &::before {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: $white;
      position: absolute;
      left: 9px;
      top: 11px;
    }
  }

  .course_learning_progress {
    width: 100%;
    height: 18px;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    bottom: 0;
  }

  .progress_inner {
    position: absolute;
    left: 0;
    height: 100%;
    background: $yellow;
  }

  .progress_text {
    font-size: 12px;
    color: $white;
    letter-spacing: 1.5px;
    position: relative;
    z-index: 10;
  }

  // course info
  .course_item__info {
    width: 100%;
    height: 73px;
  }

  .course_title {
    font-size: 14px;
    color: $dark;
    line-height: 20px;
    padding: 6px 0;
  }

  .other_info {
    margin-top: 5px;
  }

  .author_logo {
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  .author_name {
    font-size: 12px;
    padding-left: 6px;
  }

  .audience_count {
    font-size: 12px;
    color: $gray;
    padding-left: 6px;
  }
</style>
