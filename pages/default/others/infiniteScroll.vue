<template>
  <div>
    <h2><a href="https://element.eleme.cn/#/zh-CN/component/infiniteScroll" target="_blank">InfiniteScroll 无限滚动</a></h2>
    <p>滚动至底部时，加载更多数据。</p>
    <section>
      <h3>基础用法</h3>
      <p>在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
      </ul>
    </section>

  </div>
</template>

<script>

  export default {
    components: {},
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    },
    mounted() {
    }
  }
</script>

<style type="text/scss">
</style>
