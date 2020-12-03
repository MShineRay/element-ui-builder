<template>
  <vue-seamless-scroll :class-option="optionSwitch1" class="seamless-warp3">
    <span class="left-arrow">111111</span>
    <span class="right-arrow">2222</span>
    <ul class="item">
      <li v-for="item in listData">{{item}}</li>
    </ul>
  </vue-seamless-scroll>
</template>
<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import Vue from 'vue'
  recommendList: [1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11]

  Vue.use(vueSeamlessScroll)
  /**
   * @reference https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/document/README.md
   */
  export default {
    name: 'vue-seamless-scroll-demo',
    props: {},
    components: {
      vueSeamlessScroll
    },
    data() {
      return {
        listData: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    },
    computed: {
      optionSwitch1() {
        return {
          autoPlay: false,
          switchSingleStep: 140
        }
      }
    },
    mounted() {
    },
    methods: {},
    watch: {}
  }
</script>
<style lang="scss" scoped>
  .seamless-warp3 {
    overflow: hidden;
    height: 140px;
    width: 140px * 4;
    margin: 0 auto;
    .left-arrow, .right-arrow {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #00a0e9;
      cursor: pointer;
      &:hover {
        background-color: #0f39fa;
      }
      &::before {
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        top: 12px;
        left: 15px;
        border: 2px solid #fff;
      }
    }
    .left-arrow::before {
      border-right: 0;
      border-bottom: 0;
      transform: rotate(-45deg);
    }
    .right-arrow::before {
      border-left: 0;
      border-top: 0;
      left: 9px;
      transform: rotate(-45deg);
    }
    ul.item {
      width: 140px * 8;
      li {
        float: left;
        width: 120px;
        height: 120px;
        margin: 10px;
        line-height: 120px;
        background-color: #999;
        color: #fff;
        text-align: center;
        font-size: 30px;
      }
    }
  }
</style>
