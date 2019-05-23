<template>
  <el-aside class="app-lefter" width="200px" style="">
    <el-scrollbar class="app-lefter__scrollbar">
      <el-menu :default-openeds="defaultOpeneds" router>
        <template v-for="(menu,index) in leftMenuList">
          <el-submenu :index="index"><!--1级-->
            <el-menu-item v-if="menu.url" :index="menu.url" :key="'menu'+index" @click="goToUrl(menu)">
              <span slot="title">{{menu.name}}</span>
            </el-menu-item><!--只有一级-->
            <template v-if="!menu.url" slot="title"><i class="el-icon-message"></i>默认样式</template>
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
        defaultOpeneds:[0],
        leftMenuList: [
          {
            url: "",//1级：url与child对立，如有值，则child为null，name不为空；若为空，则name为空，child有值
            name: "默认样式",
            group: [
              {
                url: "",//2级
                name: "Basic",
                child: [
                  {url: "/default/base/layout", name: "Layout布局", group: [], child: []},//2级
                  {url: "/default/base/container", name: "Container 布局容器", group: [], child: []},
                  {url: "/default/base/color", name: "Color 色彩", group: [], child: []},
                  {url: "/default/base/typography", name: "Typography 字体", group: [], child: []},
                  {url: "/default/base/border", name: "Border 边框", group: [], child: []},
                  {url: "/default/base/icon", name: "Icon 图标", group: [], child: []},
                  {url: "/default/base/button", name: "Button 按钮", group: [], child: []},
                  {url: "/default/base/link", name: "Link 文字链接", group: [], child: []}
                ],
                group:[]
              },
              {
                url: "",//2级
                name: "Form",
                child: [
                  {url: "/default/form/radio", name: "Radio 单选框", group: [], child: []},//2级
                  {url: "/default/form/checkbox", name: "Checkbox 多选框", group: [], child: []},
                  {url: "/default/form/input", name: "Input 输入框", group: [], child: []},
                  {url: "/default/form/input-number", name: "InputNumber 计数器", group: [], child: []},
                  {url: "/default/form/select", name: "Select 选择器", group: [], child: []},
                  {url: "/default/form/cascader", name: "Cascader 级联选择器", group: [], child: []},
                  {url: "/default/form/switch", name: "Switch 开关", group: [], child: []},
                  {url: "/default/form/slider", name: "Slider 滑块", group: [], child: []},
                  {url: "/default/form/time-picker", name: "TimePicker 时间选择器", group: [], child: []},
                  {url: "/default/form/date-picker", name: "DatePicker 日期选择器", group: [], child: []},
                  {url: "/default/form/date-time-picker", name: "DateTimePicker 日期时间选择器", group: [], child: []},
                  {url: "/default/form/upload", name: "Upload 上传", group: [], child: []},
                  {url: "/default/form/rate", name: "Rate 评分", group: [], child: []},
                  {url: "/default/form/color-picker", name: "ColorPicker 颜色选择器", group: [], child: []},
                  {url: "/default/form/transfer", name: "Transfer 穿梭框", group: [], child: []},
                  {url: "/default/form/form", name: "Form 表单", group: [], child: []},
                ],
                group:[]
              }
            ],
            child: []
          }
        ]
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
