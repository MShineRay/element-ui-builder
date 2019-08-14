<template>
  <div class="calendar">
    <h2><a href="#" target="_blank">日历</a></h2>
    <section>
      <table border="1" cellpadding="0" cellspacing="0">
        <tr>
          <td v-for="(val,idx) in weekList1" :key="'weekList1'+idx">{{val}}</td>
        </tr>
        <template v-for="">

        </template>
      </table>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'calendar',
    data() {
      return {
        startDate: '',
        endDate: '',
        totalDays: 0,
        weekList1: ['日', '一', '二', '三', '四', '五', '六'],
        weekList2: ['一', '二', '三', '四', '五', '六', '日'],
        nowMonth: '',
        selectTimeRange: [],
        nowBeforeYear: 1,
        nowAfterYear: 1,
        TIME_OF_DAY: 24 * 60 * 60 * 1000,//一天的毫秒数
        COL_SIZE_PER_ROW: 7//每七天为一行
      };
    },
    created() {
      this.init();
    },

    computed: {
      weeks() {
        return this.getTotalRowSize(this.totalDays, this.COL_SIZE_PER_ROW);
      }
    },
    methods: {
      /**
       * 根据每行长度获取数组总行数
       * @param {number} total
       * @param {number} perRowLen
       * @returns {number}
       */
      getTotalRowSize(total, perRowLen) {
        return Math.ceil(total / perRowLen);
      },
      /**
       * 获取对应日期为周几
       * @param {number} y 年
       * @param {number} m 月
       * @param {number} d 日
       * @returns {number} 0,1,2,3,4,5,6
       */
      getDay(y, m, d) {
        return new Date(y, m, d).getDay();
      },
      totalDays(beginDate, endDate){
        return Math.ceil()
      },
      init() {
        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth() + 1;
        let nowDate = now.getDate();
        let nowTime = now.getTime();
        this.startTime = new Date(nowYear - this.nowBeforeYear, 0, 1).getTime();//1月1
        this.endTime = new Date(nowYear + this.nowAfterYear, 11, 31).getTime();// 12月31
        let nowDayIndex = (nowTime - this.startTime) / this.TIME_OF_DAY + 1;
        //定位当前显示月份
        this.nowMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        //默认选中当天和次日
        this.selectTimeRange = [nowDayIndex, nowDayIndex + 1];
        //需要显示总天数
        this.totalDays = (this.endDate - this.startDate) / (24 * 60 * 60 * 1000) + 1;
        this.$emit('change', [
          this.getAppointedDay(this.selectTimeRange[0]),
          this.getAppointedDay(this.selectTimeRange[1])
        ]);
      },
      getAppointedDay(dayIndex) {
        return new Date(this.startDate + 24 * 60 * 60 * 1000 * (dayIndex - 1));
      },
      selectTime(dayIndex) {
        if (this.selectTimeRange.length === 0 || this.selectTimeRange.length === 2) {
          this.selectTimeRange = [dayIndex];
        } else {
          if (this.selectTimeRange[0] <= dayIndex) {
            this.selectTimeRange.push(dayIndex);
          } else {
            this.selectTimeRange.unshift(dayIndex);
          }
          this.$emit('change', [
            this.getAppointedDay(this.selectTimeRange[0]),
            this.getAppointedDay(this.selectTimeRange[1])
          ]);
        }
      },
      isInRange(dayIndex) {
        if (this.selectTimeRange.length === 1 && this.selectTimeRange[0] === dayIndex) {
          return true;
        }
        if (this.selectTimeRange.length === 2 &&
          this.selectTimeRange[0] <= dayIndex &&
          dayIndex <= this.selectTimeRange[1]
        ) {
          return true;
        }
        return false;
      }
    }
  };
</script>
<style>
  .calendar {
    background-color: #fff;
    /*position: relative;*/
  }

  .calendar__week-bar {
    border-bottom: 1px solid #e5e5e5;
    font-size: 26px;
    color: #666666;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .calendar__cell-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1%;
    text-align: center;
    align-items: center;
  }

  .calendar__area {
    padding-top: 60px;
    overflow: scroll;
    color: #222222;
    font-size: 32px;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .calendar__month {
    flex-basis: 100%;
    font-size: 28px;
    font-weight: 400;
    padding: 64px 0 24px;
  }

  .calendar__day {
    cursor: pointer;
  }

  .calendar__cell {
    flex-basis: 14%;
    height: 80px;
    line-height: 80px;
    font-weight: 500;
    margin: 8px 0;
  }

  .calendar__time-selected {
    background-color: #e4f4f0;
  }
</style>
