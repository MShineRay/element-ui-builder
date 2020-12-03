<template>
  <div id="scroll-wrapper">
    <div id="scroll-container" class="horizontal-container">
      <div ref="scroll" class="scroll-wrapper">
        <div id="scroll-all-width" class="scroll-content">
          <div v-for="(item, index) in dataList" :id="'scroll-id-'+ index"
               :key="index"
               class="scroll-item">
            <el-button>
              {{item}}
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <el-button @click="preItem"><i class="el-icon-caret-left"></i></el-button>
    <el-button @click="nextItem"><i class="el-icon-caret-right"></i></el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: 'scroll-wrapper',
    data () {
      return {
        bs: null,
        scrollInfo: {
          maxScrollXValue: 0,
          currentScrollXValue: 0,
          posScrollXValue: 0
        },
        dataList:[
          'sdafsdf',
          '的落落大方',
          'sdafsdf',
          '的落落大方',
          '的落落大方',
          'sdafsdf的落落大方的落落大方sdafsdf的落落大方的落落大方',
          '的落落大方的落落大方sdafsdf的落落大方的落落大方',
          '的落落大方sdafsdf的落落大方的落落大方',
          'sdafsdf的落落大方的落落大方',
          '的落落大方',
          '的落落大方的落落大方',
          'sdafsdf的落落大方',
          '的落落大方sdafsdf的落落大方的落落大方sdafsdf的落落大方的落落大方'
        ]
      }
    },
    computed: {
    },
    mounted () {
      this.init()
//      this.$nextTick(_ => {
//        const elScroll = this.tools.$jQuery('#scroll-all-width')
//        if (this.$refs.scroll.clientWidth && elScroll) {
//          this.$refs.scroll.clientWidth <= elScroll.offsetWidth
//            ? this.isShowMoreBtn = true : this.isShowMoreBtn = false
//        }
//      })
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          probeType: 3 // listening scroll hook
        })
        this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
          /**
           * @link http://ustbhuangyi.github.io/better-scroll/doc/
           * @isInTransition 判断当前 scroll 是否处于滚动动画过程中
           * @maxScrollX  横最大横向滚动位置
           * @pos 当前滚动的位置
           * @movingDirectionX 判断 scroll 滑动过程中的方向 {-1 表示从左向右滑，1 表示从右向左滑，0 表示没有滑动。}
           */
          this.scrollInfo.maxScrollXValue = this.bs.maxScrollX
          this.scrollInfo.posScrollXValue = pos.x
        })
      },
      _registerHooks(hookNames, handler) {
        hookNames.forEach((name) => this.bs.on(name, handler))
      },
      nextItem() {
        if (Math.abs(this.scrollInfo.maxScrollXValue) >= Math.abs(this.scrollInfo.posScrollXValue)) {
          let scrollPos = this.scrollInfo.currentScrollXValue = 116.5 + Math.abs(this.scrollInfo.posScrollXValue)
          this.bs.scrollTo(0 - scrollPos, 0, 300)
        }
      },
      preItem() {
        if (this.scrollInfo.posScrollXValue <= 0) {
          let scrollPos = this.scrollInfo.currentScrollXValue = 116.5 - Math.abs(this.scrollInfo.posScrollXValue)
          this.bs.scrollTo(scrollPos, 0, 300)
        }
      },
    },
    destroy () {
      this.bs && this.bs.destroy()
    }
  }
</script>

<style lang="scss" type="text/scss">
  #scroll-wrapper {
    width: 100%;
    .horizontal-container {
      display: inline-block;
      width: calc(100% - 112px);
      .scroll-wrapper {
        white-space: nowrap;
        border-radius: 5px;
        overflow: hidden;
        .scroll-content {
          display: inline-block;
        }
        .scroll-item {
          display: inline-block;
          font-size: 24px;
          text-align: center;
          cursor: pointer;
        }
      }
      .el-button {
        border: none;
        border-radius: 0;
        background-color: #f8f9fb;
        /*background-color: #cccccc;*/
      }
      .pay-active {
        position: relative;
        transition: 0.5s all;
        &:after {
          content: '';
          display: block;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          background-color: #1caf93;
        }
      }
      .el-icon-success {
        color: #1f9b83;
      }
    }
    .horizontal-control {
      display: inline-block;
      width: 112px;
      vertical-align: top;
      .el-button {
        margin: 0;
        background-color: #f8f9fb;
      }
      .acvive-pre, .acvive-next {
        color: #1caf93;
      }
    }
  }

</style>
