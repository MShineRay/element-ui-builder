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
    <section>
      <h3>远程搜索</h3>
      <p>从服务器搜索数据，输入关键字进行查找</p>
      <el-select
        v-model="value2"
        filterable
        clearable
        allow-create
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options2"
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
        value: '',


        options2: [],
        value2: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"]
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

      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options2 = this.list.filter(item => {
              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options2 = [];
        }
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `${item}` };
      });
    }
  }
</script>

<style type="text/scss">
</style>
