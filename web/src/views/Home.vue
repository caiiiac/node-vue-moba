<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/1526626245389_thumb_216x120.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/1526692750969_thumb_216x120.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/1526626245389_thumb_216x120.jpg" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons text-center bg-white mt-3 pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="item in plate_items" :key="item.title">
          <i :class="item.icon"></i>
          <div class="py-2">{{item.title}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav-icons -->

    <m-list-card title="新闻资讯" icon="menu1" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
            <span>{{news.categoryName}}</span>
            <span>|</span>
            <span>{{news.title}}</span>
            <span>{{news.date}}</span>
          </div>
      </template>
    </m-list-card>
    <m-list-card title="英雄列表" icon="helmet-battle"></m-list-card>
    <m-list-card title="精彩视频" icon="video"></m-list-card>
    <m-list-card title="图文攻略" icon="menu1"></m-list-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        autoplay: {
          delqy: 1500,
          disableOnInteraction: false
        },
      },
      plate_items: [
        {title: '爆料站', icon: 'sprite sprite-news'},
        {title: '故事站', icon: 'sprite sprite-story'},
        {title: '周边商城', icon: 'sprite sprite-store'},
        {title: '体验服', icon: 'sprite sprite-serve'},
        {title: '新人专区', icon: 'sprite sprite-zone'},
        {title: '荣耀传承', icon: 'sprite sprite-inheritance'},
        {title: '同人社区', icon: 'sprite sprite-community'},
        {title: '王者营地', icon: 'sprite sprite-camp'},
        {title: '公众号', icon: 'sprite sprite-wx'},
        {title: '版本介绍', icon: 'sprite sprite-version'},
      ],
      newsCats: new Array("热门", "新闻", "公告", "活动", "赛事").map((v)=>({
        name: v,
        newsList: new Array(5).fill(1).map(()=> ({
          categoryName: '公告',
          title: '全服不停机更新公告',
          date: '08/08'
        }))
      }))
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: "white");

    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;

    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>