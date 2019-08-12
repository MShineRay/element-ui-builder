<template>
  <el-aside class="app-lefter" width="200px" style="">
    <el-scrollbar class="app-lefter__scrollbar">
      <el-menu :default-openeds="defaultOpeneds" router>
        <template v-for="(menu,index) in leftMenuList">
          <el-submenu :index="''+index"><!--1级-->
            <el-menu-item v-if="menu.url" :index="menu.url" :key="'menu'+index" @click="goToUrl(menu)">
              <span slot="title">{{menu.name}}</span>
            </el-menu-item><!--只有一级-->
            <template v-if="!menu.url" slot="title"><i class="el-icon-message"></i>{{menu.name}}</template>
            <template v-for="(item2,index2) in menu.group">
              <el-menu-item-group :title="item2.name">
                <template v-for="(item3,index3) in item2.child">
                  <el-menu-item :index="item3.url">{{item3.name}}</el-menu-item>
                </template>
              </el-menu-item-group>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
  export default {
    data() {
      return {
        defaultOpeneds:['0']
      }
    },
    computed: {
      leftMenuList () {
        return this.$store.state.appLefter.leftMenuList
      }
    },
    methods: {
      goToUrl(menu) {

      }
    }
  };
</script>

<style>
  .app-lefter {
    background-color: rgb(238, 241, 246)
  }

  .app-lefter .app-lefter__scrollbar {
    height: calc(100%);
  }

  .app-lefter .app-lefter__scrollbar > .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
