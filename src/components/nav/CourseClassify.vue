<template>
  <nav :class="$style.course_nav">
    <ul :class="$style.nav_list">
      <template v-for="course in course_classify" >
        <li class="nav_list_item" :class="$style.nav_list_item" v-bind:key="course.id">
          <a>{{course.text}}</a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CourseClassify',
  data() {
    return {
      course_classify: [
        {
          id: 1,
          text: '产品设计',
          link: 'url',
        },
        {
          id: 2,
          text: '职场发展',
          link: 'url',
        },
        {
          id: 3,
          text: 'IT互联网',
          link: 'url',
        },
        {
          id: 4,
          text: '人工智能',
          link: 'url',
        },
        {
          id: 5,
          text: '金融财会',
          link: 'url',
        },
        {
          id: 6,
          text: '前端开发',
          link: 'url',
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
  .course_nav {
    width: 200px;
    height: 276px;
    position: absolute;
    left: 0;
  }
  .nav_list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav_list_item {
    height: 46px;
    line-height: 46px;
    padding-left: 35px;
    background: $lightgray;
    font-size: 16px;
    &:hover {
      background: $white;
      color: $dark;
      font-weight: 600;
    }
  }
</style>
