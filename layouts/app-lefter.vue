<template>
  <el-aside class="app-lefter" width="200px" style="">
    <el-scrollbar class="app-lefter__scrollbar">
      <el-menu :default-openeds="['1', '3']">
        <template v-for="(menu,index) in leftMenuList">
          <el-submenu :index="index">
            <template v-if="!menu.url" slot="title"><i class="el-icon-message"></i>默认样式</template>
            <el-menu-item
              v-if="menu.url"
              :index="menu.url"
              :key="'menu'+index"
              @click="goToUrl(menu)"
            >
              <span slot="title">{{menu.name}}</span>
            </el-menu-item>
            <template v-if="menu.child && menu.child.length>0">

            </template>
            <el-menu-item-group title="Basic">
              <!--<template slot="title">Basic</template>-->
              <el-menu-item index="1-001">Layout布局</el-menu-item>
              <el-menu-item index="1-002">Container 布局容器</el-menu-item>
              <el-menu-item index="1-003">Color 色彩</el-menu-item>
              <el-menu-item index="1-004">Typography 字体</el-menu-item>
              <el-menu-item index="1-005">Border 边框</el-menu-item>
              <el-menu-item index="1-006">Icon 图标</el-menu-item>
              <el-menu-item index="1-007">Button 按钮</el-menu-item>
              <el-menu-item index="1-008">Link 文字链接</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Form">
              <el-menu-item index="1-1001">Radio 单选框</el-menu-item>
              <el-menu-item index="1-1002">Checkbox 多选框</el-menu-item>
              <el-menu-item index="1-1003">Input 输入框</el-menu-item>
              <el-menu-item index="1-1004">InputNumber 计数器</el-menu-item>
              <el-menu-item index="1-1005">Select 选择器</el-menu-item>
              <el-menu-item index="1-1006">Cascader 级联选择器</el-menu-item>
              <el-menu-item index="1-1007">Switch 开关</el-menu-item>
              <el-menu-item index="1-1008">Slider 滑块</el-menu-item>
              <el-menu-item index="1-1009">TimePicker 时间选择器</el-menu-item>
              <el-menu-item index="1-1010">DatePicker 日期选择器</el-menu-item>
              <el-menu-item index="1-1011">DateTimePicker 日期时间选择器</el-menu-item>
              <el-menu-item index="1-1012">Upload 上传</el-menu-item>
              <el-menu-item index="1-1013">Rate 评分</el-menu-item>
              <el-menu-item index="1-1014">ColorPicker 颜色选择器</el-menu-item>
              <el-menu-item index="1-1015">Transfer 穿梭框</el-menu-item>
              <el-menu-item index="1-1016">Form 表单</el-menu-item>
              <!---->
              <!--Data-->
              <!--Table 表格-->
              <!--Tag 标签-->
              <!--Progress 进度条-->
              <!--Tree 树形控件-->
              <!--Pagination 分页-->
              <!--Badge 标记-->

              <!--Notice-->
              <!--Alert 警告-->
              <!--Loading 加载-->
              <!--Message 消息提示-->
              <!--MessageBox 弹框-->
              <!--Notification 通知-->
              <!--Navigation-->
              <!--NavMenu 导航菜单-->
              <!--Tabs 标签页-->
              <!--Breadcrumb 面包屑-->
              <!--Dropdown 下拉菜单-->
              <!--Steps 步骤条-->
              <!--Others
              Dialog 对话框
              Tooltip 文字提示
              Popover 弹出框
              Card 卡片
              Carousel 走马灯
              Collapse 折叠面板
              Timeline 时间线
              Divider 分割线
              Calendar 日历
              Image 图片
           -->
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </template>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>默认样式</template>
          <el-menu-item-group title="Basic">
            <!--<template slot="title">Basic</template>-->
            <el-menu-item index="1-001">Layout布局</el-menu-item>
            <el-menu-item index="1-002">Container 布局容器</el-menu-item>
            <el-menu-item index="1-003">Color 色彩</el-menu-item>
            <el-menu-item index="1-004">Typography 字体</el-menu-item>
            <el-menu-item index="1-005">Border 边框</el-menu-item>
            <el-menu-item index="1-006">Icon 图标</el-menu-item>
            <el-menu-item index="1-007">Button 按钮</el-menu-item>
            <el-menu-item index="1-008">Link 文字链接</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Form">
            <el-menu-item index="1-1001">Radio 单选框</el-menu-item>
            <el-menu-item index="1-1002">Checkbox 多选框</el-menu-item>
            <el-menu-item index="1-1003">Input 输入框</el-menu-item>
            <el-menu-item index="1-1004">InputNumber 计数器</el-menu-item>
            <el-menu-item index="1-1005">Select 选择器</el-menu-item>
            <el-menu-item index="1-1006">Cascader 级联选择器</el-menu-item>
            <el-menu-item index="1-1007">Switch 开关</el-menu-item>
            <el-menu-item index="1-1008">Slider 滑块</el-menu-item>
            <el-menu-item index="1-1009">TimePicker 时间选择器</el-menu-item>
            <el-menu-item index="1-1010">DatePicker 日期选择器</el-menu-item>
            <el-menu-item index="1-1011">DateTimePicker 日期时间选择器</el-menu-item>
            <el-menu-item index="1-1012">Upload 上传</el-menu-item>
            <el-menu-item index="1-1013">Rate 评分</el-menu-item>
            <el-menu-item index="1-1014">ColorPicker 颜色选择器</el-menu-item>
            <el-menu-item index="1-1015">Transfer 穿梭框</el-menu-item>
            <el-menu-item index="1-1016">Form 表单</el-menu-item>
            <!---->
            <!--Data-->
            <!--Table 表格-->
            <!--Tag 标签-->
            <!--Progress 进度条-->
            <!--Tree 树形控件-->
            <!--Pagination 分页-->
            <!--Badge 标记-->

            <!--Notice-->
            <!--Alert 警告-->
            <!--Loading 加载-->
            <!--Message 消息提示-->
            <!--MessageBox 弹框-->
            <!--Notification 通知-->
            <!--Navigation-->
            <!--NavMenu 导航菜单-->
            <!--Tabs 标签页-->
            <!--Breadcrumb 面包屑-->
            <!--Dropdown 下拉菜单-->
            <!--Steps 步骤条-->
            <!--Others
            Dialog 对话框
            Tooltip 文字提示
            Popover 弹出框
            Card 卡片
            Carousel 走马灯
            Collapse 折叠面板
            Timeline 时间线
            Divider 分割线
            Calendar 日历
            Image 图片
         -->
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>自定义</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>样式构建</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>测试</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </el-aside>

</template>

<script>
  export default {
    data() {
      return {
        leftMenuList: [
          {
            url: "",//url与child对立，如有值，则child为null，name不为空；若为空，则name为空，child有值
            name: "默认样式",
            group: [
              {
                groupName:"Basic",
                child:[

                ]
              }
            ],
            child: [
              {
                title: "Basic"
              },
              {
                title: "Form"
              }
            ]
          }
        ]
      }
    },
    methods:{
      goToUrl(menu){

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
