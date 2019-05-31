<template>
  <div>
    <h2><a href="https://element.eleme.cn/#/zh-CN/component/checkbox" target="_blank">Checkbox 多选框</a></h2>
    <p>一组备选项中进行多选。</p>

    <section>
      <h3>基础用法</h3>
      <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
      <!-- `checked` 为 true 或 false -->
      <el-checkbox v-model="checked">备选项</el-checkbox>
    </section>

    <section>
      <h3>禁用状态</h3>
      <p>多选框不可用状态。</p>
      <el-checkbox v-model="checked11" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked12" disabled>备选项</el-checkbox>
    </section>

    <section>
      <h3>多选框组</h3>
      <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </section>

    <section>
      <h3>indeterminate 状态</h3>
      <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。</p>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </section>

    <section>
      <h3>可选项目数量的限制</h3>
      <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
      <el-checkbox-group
        v-model="checkedCities2"
        :min="1"
        :max="2">
        <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </section>

    <section>
      <h3>按钮样式</h3>
      <p>按钮样式的多选组合。</p>
      <div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button v-for="city in cities3" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <el-checkbox-button v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </section>


    <section>
      <h3>带有边框</h3>
      <div>
        <el-checkbox v-model="checked71" label="备选项1" border></el-checkbox>
        <el-checkbox v-model="checked72" label="备选项2" border></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox v-model="checked73" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="checked74" label="备选项2" border size="medium"></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup71" size="small">
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border disabled></el-checkbox>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup72" size="mini" disabled>
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border></el-checkbox>
        </el-checkbox-group>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        checked: true,

        checked11: false,
        checked12: true,

        checkList: ['选中且禁用','复选框 A'],


        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities:  ['上海', '北京', '广州', '深圳'],
        isIndeterminate: true,

        checkedCities2: ['上海', '北京'],
        cities2:  ['上海', '北京', '广州', '深圳'],

        cities3:  ['上海', '北京', '广州', '深圳'],
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],

        checked71: true,
        checked72: false,
        checked73: false,
        checked74: true,
        checkboxGroup71: [],
        checkboxGroup72: []
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<style>
</style>
