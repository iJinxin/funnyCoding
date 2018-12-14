<template>
  <div :class="$style.course_item">
    <div :class="$style.course_item__cover" ref="course_item">
      <template v-if="courseData.type==='live'">
        <div :class="$style.course_live__status">
          <span :class="$style.status_text">{{ courseData.liveStatus | dict('LIVE_STATUS') }}</span>
        </div>
      </template>
      <template v-else>
        <div :class="$style.course_learning_progress" class="display_flex justify-content__center align-items__center">
          <div :class="$style.progress_inner" ref="progress_inner"></div>
          <span :class="$style.progress_text">{{ courseData.progress + '%'}}</span>
        </div>
      </template>
    </div>
    <div :class="$style.course_item__info">
      <div :class="$style.course_title" class="text-truncate">{{courseData.title}}</div>
      <div :class="$style.other_info" class="display_flex justify-content__space-between">
        <div class="display_flex align-items__center">
          <img :class="$style.author_logo" v-bind:src="courseData.logo">
          <span :class="$style.author_name" class="text-truncate">{{courseData.author}}</span>
        </div>
        <div :class="$style.other_info_audience" class="display_flex justify-content__flex-end align-items__center">
          <i></i>
          <span :class="$style.audience_count">{{courseData.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
   * initialData应包含
   * id, cover(封面), title, author, logo(作者封面), type(直播 or 课程), count(观看人数)
   * type: 'live' -> liveStatus(直播状态)
   * type: 'course' -> progress(学习进度)
   */
export default {
  name: 'CourseItem',
  props: {
    initialData: Object,
  },
  computed: {
    courseData() {
      return Object.assign({}, this.initialData);
    },
  },
  mounted() {
    this.$refs.course_item.style.backgroundImage = `url(${this.courseData.cover})`;
    if (this.$refs.progress_inner) {
      this.$refs.progress_inner.style.width = `${this.courseData.progress}%`;
    }
  },
};
</script>

<style lang="scss" module>
  .course_item {
    width: 288px;
    height: 236px;
    padding: 8px;
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
