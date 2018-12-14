<template>
  <main class="main-content">
    <section :class="$style.banner_slide">
      <div :class="$style.course_entry">
        <course-classify></course-classify>
      </div>
      <div :class="$style.latest_notice">
        <div :class="$style.tab_info">
          <home-tab></home-tab>
          <div :class="$style.actions" class="display_flex justify-content__space-around align-items__center">
            <button :class="$style.actions_item" class="primary small">上传资料</button>
            <button :class="$style.actions_item" class="warning small">发布课程</button>
            <button :class="$style.actions_item" class="success small">个人中心</button>
          </div>
        </div>
      </div>
      <carousel></carousel>
    </section>
    <section :class="$style.course_plan">
      <course-plan></course-plan>
    </section>
    <section :class="$style.latest_live">
      <div :class="$style.latest_live__title">
        <h2>最新直播</h2>
      </div>
      <div :class="$style.latest_live__link"><a>查看更多</a></div>
      <div :class="$style.latest_live__content">
        <course-list v-bind:initial-course-list="courses"></course-list>
      </div>
    </section>
    <section :class="$style.popular_course">
      <div :class="$style.popular_course__title">
        <h2>最火课程</h2>
      </div>
      <div :class="$style.popular_course__link"><a>查看更多</a></div>
      <div :class="$style.popular_course__content">
        <template></template>
      </div>
      <div :class="$style.popular_course__more">
        <button class="primary large">全部课程</button>
      </div>
    </section>
  </main>
</template>

<script>
import courseClassify from '@/components/nav/CourseClassify';
import homeTab from '@/components/tabs/HomeTab';
import coursePlan from '@/components/course/CoursePlan';
import carousel from '@/components/nav/Carousel';
import courseList from '@/components/course/CourseList';

export default {
  name: 'Home',
  data() {
    return {
      planList: [
        { id: 1, date: '今天', time: '18:50', title: '用Python自动化办公，做职场高手', type: '' },
        { id: 2, date: '今天', time: '19:50', title: '用Python自动化办公，做职场高手', type: '【直播】' },
        { id: 3, date: '明天', time: '18:50', title: '新媒体营销，做职场高手', type: '' },
        { id: 4, date: '明天', time: '19:50', title: '大神古风摄影教学精髓片', type: '' },
        { id: 5, date: '12-30', time: '18:50', title: '玩转HTML5前端+跨平台开发', type: '' },
      ],
      course: {
        id: 1,
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
        '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
        '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
        author: 'jinxin',
        title: '今天的直播真香',
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
        '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
        '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
        type: 'live',
        liveStatus: 'living',
        count: 100,
      },
      courses: [
        {
          id: 1,
          cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
          '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
          author: 'jinxin',
          title: '今天的直播真香',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
          '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
          type: 'course',
          progress: '50',
          count: 100,
        },
        {
          id: 2,
          cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
          '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
          author: 'jinxin222',
          title: '今天的直播真香aaaaa',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
          '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
          type: 'live',
          liveStatus: 'living',
          count: 1001,
        },
      ],
    };
  },
  components: {
    courseClassify, homeTab, coursePlan, carousel, courseList,
  },
};
</script>

<style lang="scss" module>
  .banner_slide {
    height: 276px;
    margin-top: 12px;
    position: relative;
    z-index: 10;
  }

  .course_entry {
    position: relative;
    width: $container_width;
    margin: 0 auto;
  }

  .latest_notice {
    position: relative;
    width: $container_width;
    margin: 0 auto;
  }

  .tab_info {
    position: absolute;
    right: 0;
    top: 13px;
    width: 250px;
    height: 252px;
    background: $lightgray;
    border-radius: 2px;
  }

  .actions {
    height: 32px;
    width: 100%;
  }

  .actions_item {
    margin-bottom: 1px;
  }

  .actions_item:first-child {
    margin-left: 1px;
  }

  .latest_live,
  .popular_course,
  .course_plan {
    position: relative;
    width: $container_width;
    margin: 10px auto 0 auto;
  }

  .popular_course {
    margin-bottom: 54px;
  }

  .latest_live__title,
  .popular_course__title,
  .course_plan__title {
    text-align: center;
  }

  .latest_live__link,
  .popular_course__link,
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
    background: $green;
  }

  .latest_live__content {

  }

  .popular_course__content {
    width: 100%;
    height: 510px;
    background: $yellow;
  }

  .popular_course__more {
    margin-top: 42px;
    text-align: center;
  }
</style>
<style scoped>
  h2 {
    font-size: 20px;
    margin: 24px 0;
  }

  h3 {
    font-size: 18px;
    margin: 14px 0;
    color: #fff;
  }
</style>
