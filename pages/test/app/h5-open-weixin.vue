<template>
  <el-button @click="testApp('weixin://')">打开微信</el-button>
</template>
<script>
  export default {
    name: '',
    props: {},
    components: {},
    data() {
      return {}
    },
    computed: {},
    mounted() {
    },
    methods: {
      isWeiXin: function () {
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
      },
      testApp: function (url) {
        if (this.isWeiXin()) {
          var ifr = document.createElement("iframe");
          ifr.setAttribute('src', url);
          ifr.setAttribute('style', 'display:none');
          document.body.appendChild(ifr);
        } else {
          var r = window.confirm("您没有安装微信，请先安装微信!");
          if (r == true) {
            location.href = "http://weixin.qq.com/"
          }
        }
      }
    }
  }
</script>
<style>

</style>
