<template>
  <div class="calendar">
    <div class="calendar__week-bar calendar__cell-wrap">
      <span v-for="w in weekName" class="calendar__cell" :key="w">{{ w }}</span>
    </div>
    <div class="calendar__area calendar__cell-wrap">
      <template v-for="dayIndex in totalDays">
        <div
          v-if="getAppointedDay(dayIndex).getDate() === 1"
          class="calendar__month"
          :class="{
                        calendar__now: getAppointedDay(dayIndex).getTime() === nowMonth
                    }"
          :key="dayIndex + '--m'"
        >
          {{ getAppointedDay(dayIndex).getFullYear() }}年{{
          getAppointedDay(dayIndex).getMonth() + 1
          }}月
        </div>
        <template v-if="getAppointedDay(dayIndex).getDate() === 1">
                    <span
                      class="calendar__cell"
                      v-for="dayInWeek in getAppointedDay(dayIndex).getDay()"
                      :key="dayIndex + '--' + dayInWeek"
                    ></span>
        </template>
        <span
          class="calendar__cell calendar__day"
          :class="{
                        'calendar__time-selected': isInRange(dayIndex)
                    }"
          @click="selectTime(dayIndex)"
          :key="dayIndex"
        >{{ getAppointedDay(dayIndex).getDate() }}</span
        >
      </template>
    </div>
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
        weekName: ['日', '一', '二', '三', '四', '五', '六'],
        nowMonth: '',
        selectTimeRange: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        let now = new Date();
        this.startDate = new Date(now.getFullYear() - 1, now.getMonth(), 1).getTime();
        this.endDate = new Date(now.getFullYear() + 1, now.getMonth() + 1, 0).getTime();
        let nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        let nowDayIndex = (nowDate - this.startDate) / (24 * 60 * 60 * 1000) + 1;
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
        this.$nextTick(function () {
          // this.$el.getElementsByClassName('calendar__now')[0].scrollIntoView();
          this.$el.getElementsByClassName('calendar__area')[0].scrollTop =
            this.$el.getElementsByClassName('calendar__now')[0].offsetTop -
            this.$el.getElementsByClassName('calendar__now')[0].clientHeight +
            20;
        });
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
        if (
          this.selectTimeRange.length == 2 &&
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
