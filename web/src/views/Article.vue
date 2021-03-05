<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <div class="flex-1 text-ellipsis text-blue pl-2 pr-3">{{model.title}}</div>
      <div class="text-grey fs-xs">{{model.createdAt | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>

    <div class="px-3 py-2 border-top">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          class="py-1"
          tag="div"
          v-for="item in model.related"
          :key="item._id"
          :to="`/articles/${item._id}`"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  props: {
    id: {
      required: true
    }
  },
  data () {
    return {
      model: null
    }
  },
  watch: {
    id: 'fetch',
    // id() {
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-back {
    font-size: 1.6923rem;
  }

  .body {
    h1 {
      font-size: 1.1538rem;
      line-height: 1.5em;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>