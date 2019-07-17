<template>
  <div>
    <h2><a href="https://element.eleme.cn/#/zh-CN/component/select" target="_blank">Input 输入框</a></h2>
    <p>通过鼠标或键盘输入字符。</p>
    <section>
      <h3>可搜索</h3>
      <p>可以利用搜索功能快速查找选项</p>
      <el-select v-model="value" filterable ref="elSlt" placeholder="请选择" @visible-change="visibleChange($event)"
        @blur="selectBlur($event)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </section>

  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      visibleChange(event){
        if(!event){
          setTimeout(()=>{
            this.$refs.elSlt.handleClose();
            this.$refs.elSlt.handleClose();
          },100)
        }
      },
      selectBlur(event){

      }
    },
    mounted() {
    }
  }
</script>

<style type="text/scss">
</style>
