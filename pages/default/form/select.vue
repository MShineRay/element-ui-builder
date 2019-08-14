<template>
  <div>
    <h2><a href="https://element.eleme.cn/#/zh-CN/component/select" target="_blank">Select 选择器</a></h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <section>
      <h3>基础用法</h3>
      <p>适用广泛的基础单选</p>
      <el-select v-model="value" placeholder="请选择" @change="sltChange" @visible-change="optClick">
        <el-option
          @click="optClick"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </section>
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
      sltChange(){
        console.log('change')
      },
      optClick(){
        console.log('visible-change')
      },
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
