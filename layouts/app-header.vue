<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </el-header>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
/*html {*/
  /*font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',*/
    /*Roboto, 'Helvetica Neue', Arial, sans-serif;*/
  /*font-size: 16px;*/
  /*word-spacing: 1px;*/
  /*-ms-text-size-adjust: 100%;*/
  /*-webkit-text-size-adjust: 100%;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*box-sizing: border-box;*/
/*}*/

/**,*/
/**:before,*/
/**:after {*/
  /*box-sizing: border-box;*/
  /*margin: 0;*/
/*}*/
/*.el-header {*/
  /*background-color: #B3C0D1;*/
  /*color: #333;*/
  /*line-height: 60px;*/
/*}*/

/*.el-aside {*/
  /*color: #333;*/
/*}*/
/*.button--green {*/
  /*display: inline-block;*/
  /*border-radius: 4px;*/
  /*border: 1px solid #3b8070;*/
  /*color: #3b8070;*/
  /*text-decoration: none;*/
  /*padding: 10px 30px;*/
/*}*/

/*.button--green:hover {*/
  /*color: #fff;*/
  /*background-color: #3b8070;*/
/*}*/

/*.button--grey {*/
  /*display: inline-block;*/
  /*border-radius: 4px;*/
  /*border: 1px solid #35495e;*/
  /*color: #35495e;*/
  /*text-decoration: none;*/
  /*padding: 10px 30px;*/
  /*margin-left: 15px;*/
/*}*/

/*.button--grey:hover {*/
  /*color: #fff;*/
  /*background-color: #35495e;*/
/*}*/
</style>
