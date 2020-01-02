<template>
  <div>v-viewer
    <el-button @click="testApp('weixin://')">打开微信</el-button>
    <div id="app">
      <div class="images" v-viewer="{movable: false}" style="display: none">
        <img v-for="src in images" :src="src" :key="src">
      </div>
      <button type="button" @click="show">Show</button>
    </div>
  </div>

</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  export default {
    data() {
      return {
        images: [
          'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        ]
      }
    },
    methods: {
      show () {
        const viewer = this.$el.querySelector('.images').$viewer
        viewer.show()
      }
    }
  }
</script>
<style>

</style>
