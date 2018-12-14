<!-- 首页轮播图，归类于导航 -->
<template>
  <section class="display_flex" ref="carousel_background">
    <a :class="$style.carousel_aside" class="flex_1"></a>
    <el-carousel :interval="2500" height="276px" trigger="click" :class="$style.carousel" @change="onChange">
      <el-carousel-item v-for="item in items" :key="item.id">
        <img v-bind:src="item.img"/>
      </el-carousel-item>
    </el-carousel>
    <a :class="$style.carousel_aside" class="flex_1"></a>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      items: [
        {
          id: 1,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441921&di=' +
          '05c812f9f80407372365551018647e6c&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2Fb151f8198618367afe76969623738bd4b21ce5fa.jpg',
          background: '#222222',
        },
        {
          id: 2,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441920&di=' +
          'fd4d39c5eb220cb20232661b98e0b35f&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2F91ef76c6a7efce1b5ef04082a251f3deb58f659b.jpg',
          background: '#444444',
        },
        {
          id: 3,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544175441920&di=' +
          'c4bea75303e615a2de61588a2ddd97ad&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%' +
          '2Fimage%2Fpic%2Fitem%2F5bafa40f4bfbfbed5572eb3875f0f736afc31f4a.jpg',
          background: '#666666',
        },
      ],
    };
  },
  methods: {
    onChange(key) {
      this.$refs.carousel_background.style.background = this.items[key].background;
    },
  },
};
</script>

<style lang="scss" module>
  .carousel_aside {
    display: block;
    height: 276px;
  }

  .carousel {
    width: 750px;
    margin: 0 auto;
    left: -25px;
  }
</style>
