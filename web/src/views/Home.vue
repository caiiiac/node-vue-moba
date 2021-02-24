<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/1526626245389_thumb_216x120.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/1526692750969_thumb_216x120.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/1526626245389_thumb_216x120.jpg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: 'white');

    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: 'info');
    }
  }
}

</style>