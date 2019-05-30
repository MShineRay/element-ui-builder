<template>
  <div>
    <h2><a href="https://element.eleme.cn/#/zh-CN/component/radio" target="_blank">Radio 单选框</a></h2>
    <p>在一组备选项中进行单选。</p>

    <section>
      <h3>基础用法</h3>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </section>

    <section>
      <h3>禁用状态</h3>
      <p>单选框不可用的状态。</p>
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </section>

    <section>
      <h3>单选框组</h3>
      <p>适用于在多个互斥的选项中选择的场景。</p>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </section>

    <section>
      <h3>按钮样式</h3>
      <p>按钮样式的单选组合。</p>
      <div>
        <el-radio-group v-model="radio31">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio32" size="medium">
          <el-radio-button label="上海" ></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio33" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled ></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio34" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </section>

    <section>
      <h3>带有边框</h3>
      <div>
        <el-radio v-model="radio41" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio41" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio42" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio42" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio43" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio44" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        radio: '1',

        radio1: '选中且禁用',

        radio2: 3,

        radio31: '上海',
        radio32: '上海',
        radio33: '上海',
        radio34: '上海',

        radio41: '1',
        radio42: '1',
        radio43: '1',
        radio44: '1'
      }
    }
  }
</script>

<style>
</style>
