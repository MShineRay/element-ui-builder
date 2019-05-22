<template>
  <el-container class="default__container" >
    <app-lefter></app-lefter>
    <el-container>
      <app-header></app-header>
      <el-main>
        <el-scrollbar class="default_el-main-scrollbar">
          <nuxt/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppHeader from './app-header.vue'
  import AppLefter from './app-lefter.vue'

  export default {
    components: {
      AppHeader,
      AppLefter
    }
  };
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  /**,*/
  /**:before,*/
  /**:after {*/
  /*box-sizing: border-box;*/
  /*margin: 0;*/
  /*}*/

  .default__container .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    position: fixed;
    right: 0;
    left: 200px;
    top: 0;
    z-index: 1000;
  }

  .default__container .el-aside {
    color: #333;
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .default__container .el-main {
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0;
    bottom: 0;
    padding: 20px 0 0 20px;
    height: calc(100% - 60px);
  }

  .default__container .default_el-main-scrollbar {
    height: calc(100% - 60px);
  }

  .default__container .default_el-main-scrollbar > .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
