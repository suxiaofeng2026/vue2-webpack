<template>
  <div>
    {{option}}
    <charts-container :option="option" v-if="isReady"></charts-container>
  </div>
</template>
<style lang="less">
.dashboardListContainer {
  margin-top: 20px;
  border: 1px solid #f1f0f2;
  margin-bottom: 10px;
  & > h1 {
    font-weight: normal;
    display: block;
    padding: 0;
    margin: 0;
    position: relative;
    & > span {
      display: inline-block;
      color: #fff;
      background-color: #409eff;
      padding: 0 10px 0 10px;
      font-size: 15px;
      position: absolute;
      top: -15px;
      left: 10px;
      line-height: 30px;
    }
  }
  & > div {
    margin-top: 15px;
    padding: 10px;
  }
}
.dashboardDataList {
  & > ul {
    padding: 0px;
    margin: 0px;
    & > li {
      color: #6e7b8a;
      float: left;
      width: 16.6667%;
      display: block;
      text-align: center;
      line-height: 2;
      & > h1 {
        font-size: 12px;
      }
      & > span {
        display: block;
        color: #000;
        font-size: 24px;
        & > span {
          font-size: 14px;
          color: #6e7b8a;
        }
      }
    }
  }
}
.childListContainer {
  & > div {
    display: inlineblock;
    float: left;
  }
  & > div:first-child {
    width: 33.333%;
  }
  & > div:nth-child(2) {
    width: 66.666%;
  }
}
@media screen and (min-width: 1400px) {
  .chartsList {
    & > div {
      width: 50%;
      display: inlineblock;
      float: left;
    }
  }
}
</style>
<script>
import echarts from 'echarts'
import chartsContainer from '@/components/dashboard/charts_container'
export default {
  data () {
    return {
      isReady: false,
      option: {}
    }
  },
  components: {
    chartsContainer
  },
  mounted () {
    function getVirtulData (year) {
      year = year || '2017'
      var date = +echarts.number.parseDate(year + '-01-01')
      var end = +echarts.number.parseDate(+year + 1 + '-01-01')
      var dayTime = 3600 * 24 * 1000
      var data = []
      for (var time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 10000)
        ])
      }
      return data
    }

    this.option = {
      title: {
        top: 30,
        left: 'center',
        text: '各语料日历时间分布图'
      },
      tooltip: {
        formatter: function (params) {
          return '数量: ' + params.value[1]
        }
      },
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
          color: '#000'
        },
        pieces: [
          { gte: 0, lt: 500, color: '#ebedf0' },
          { gte: 8000, color: '#196127' }
        ]
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        splitLine: { show: false },
        // cellSize: ['auto', 'auto'],
        cellSize: ['auto', 22],
        range: new Date().getFullYear(),
        itemStyle: {
          normal: { borderWidth: 5, borderColor: '#fff', color: '#ebedf0' }
        },
        dayLabel: { nameMap: 'cn', color: '#767676' },
        monthLabel: { nameMap: 'en', color: '#767676' },
        yearLabel: { show: false }
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2020)
      }
    }
    this.isReady = true
  },
  methods: {
  }
}
</script>
