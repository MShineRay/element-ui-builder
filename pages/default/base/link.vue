<template>
  <div>
    <h2><a href="https://element.eleme.cn/#/zh-CN/component/link" target="_blank">Link 文字链接</a></h2>
    <p>文字超链接。</p>

    <section>
      <h3>基础用法</h3>
      <p>基础的文字链接用法</p>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </section>

    <section>
      <h3>禁用状态</h3>
      <p>文字链接不可用状态</p>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </section>

    <section>
      <h3>下划线</h3>
      <p>文字链接下划线。</p>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </section>

    <section>
      <h3>图标</h3>
      <p>带图标的文字链接可增强辨识度。</p>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </section>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {}
    }
  }
</script>

<style>
</style>
