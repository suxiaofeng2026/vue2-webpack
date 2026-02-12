<template>
    <div class="mainChartContainer">
      <h1>
        <span>
          <el-button-group >
            <el-button :type="currentItem==='day'?'primary':''" size="small" @click="setNewOptions('day')">天</el-button>
            <el-button  :type="currentItem==='week'?'primary':''" size="small" @click="setNewOptions('week')">周</el-button>
            <el-button  :type="currentItem==='month'?'primary':''" size="small" @click="setNewOptions('month')">月</el-button>
          </el-button-group>
        </span>
        <i>热门词汇统计</i>
      </h1>
      <span>
        <i><span></span>热门词汇</i>
        <span>评率:(次)</span>
      </span>
      <div id="chart_example" style="width:100%;height: 500px;"></div>
    </div>

</template>
<style lang="less">
.mainChartContainer{
  border:1px solid #EBEEF5;
&>h1{
  line-height: 54px;
  font-size: 16px;
  color: #252525;
  border-bottom:1px solid #EBEEF5;
  &>i{
    font-style: normal;
    margin-left: 24px;
  }
  &>span{
    float: right;
    margin-right:24px;
  }
}
&>span{
  font-size: 12px;
  color: #303133;
  display: block;
  padding-left:24px;
  &>i{
    display: block;
    margin-top: 12px;
    &>span{
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #409EFF;
      margin-right: 5px;
    }
  }
  &>span{
      display: block;
    margin-top: 6px;
  }
}
}
</style>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      currentItem: 'day',
      chartContainer: '',
      option: {
        grid: {
          top: '24',
          left: '24',
          right: '24',
          bottom: '5%',
          containLabel: true
        },
        color: ['#409EFF'], // 柱状图颜色
        tooltip: {
          formatter: function (params) {
            var dates = ['2021.03.29', '2021.03.30', '2021.03.31', '2021.04.01', '2021.04.04', '2021.04.05', '2021.04.06', '2021.04.07', '2021.04.08', '2021.04.11', '2021.04.12', '2021.04.13', '2021.04.14', '2021.04.15', '2021.04.18', '2021.04.19', '2021.04.20', '2021.04.21', '2021.04.22', '2021.04.25', '2021.04.26', '2021.04.27', '2021.04.28', '2021.04.29', '2021.05.02', '2021.05.03', '2021.05.04', '2021.05.05', '2021.05.06', '2021.05.09', '2021.05.10', '2021.05.11', '2021.05.12', '2021.05.13', '2021.05.16', '2021.05.17', '2021.05.18', '2021.05.19', '2021.05.20', '2021.05.23', '2021.05.24', '2021.05.25', '2021.05.26', '2021.05.27', '2021.05.31', '2021.06.01', '2021.06.02', '2021.06.03', '2021.06.06', '2021.06.07', '2021.06.08', '2021.06.09', '2021.06.10', '2021.06.13', '2021.06.14', '2021.06.15', '2021.06.16', '2021.06.17', '2021.06.20', '2021.06.21', '2021.06.22']

            var tar

            tar = params[0]

            return dates[tar.dataIndex] + '——' + dates[tar.dataIndex + 1] + '<br>' + '<span style=" display: inline-block;width: 8px; height: 8px; background-color: #409EFF;margin-right:5px"> </span>' + tar.name + '&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + tar.value + '</b>'
          },
          backgroundColor: 'rgba(255,255,255,0.8)', // 提示框背景颜色
          trigger: 'axis',
          textStyle: {
            color: '#7B7B7D'
          },
          axisPointer: {
            // backgroundColor: '#409EFF'
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['热词1', '热词2', '热词3', '热词4', '热词5', '热词6', '热词7', '热词8', '热词9', '热词10'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225]
          }
        ]
      },
      option2: {
        grid: {
          top: '24',
          left: '24',
          right: '24',
          bottom: '5%',
          containLabel: true
        },
        color: ['#409EFF'], // 柱状图颜色
        tooltip: {
          formatter: function (params) {
            var dates = ['2021.03.29', '2021.03.30', '2021.03.31', '2021.04.01', '2021.04.04', '2021.04.05', '2021.04.06', '2021.04.07', '2021.04.08', '2021.04.11', '2021.04.12', '2021.04.13', '2021.04.14', '2021.04.15', '2021.04.18', '2021.04.19', '2021.04.20', '2021.04.21', '2021.04.22', '2021.04.25', '2021.04.26', '2021.04.27', '2021.04.28', '2021.04.29', '2021.05.02', '2021.05.03', '2021.05.04', '2021.05.05', '2021.05.06', '2021.05.09', '2021.05.10', '2021.05.11', '2021.05.12', '2021.05.13', '2021.05.16', '2021.05.17', '2021.05.18', '2021.05.19', '2021.05.20', '2021.05.23', '2021.05.24', '2021.05.25', '2021.05.26', '2021.05.27', '2021.05.31', '2021.06.01', '2021.06.02', '2021.06.03', '2021.06.06', '2021.06.07', '2021.06.08', '2021.06.09', '2021.06.10', '2021.06.13', '2021.06.14', '2021.06.15', '2021.06.16', '2021.06.17', '2021.06.20', '2021.06.21', '2021.06.22']
            console.log(params)
            var tar
            // if (params[1].value !== '-') {
            //     tar = params[1];
            // }
            // else {
            tar = params[0]
            // }
            return dates[tar.dataIndex] + '<br>' + '<span style=" display: inline-block;width: 8px; height: 8px; background-color: #409EFF;margin-right:5px"> </span>' + tar.name + '&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + tar.value + '</b>'
          },
          backgroundColor: 'rgba(255,255,255,0.8)', // 提示框背景颜色
          trigger: 'axis',
          textStyle: {
            color: '#7B7B7D'
          },
          axisPointer: {
            // backgroundColor: '#409EFF'
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['热词1', '热词2', '热词3', '热词4', '热词5', '热词6', '热词7', '热词8', '热词9', '热词10'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            data: [1995, 4666, 1444, 2858, 3654, 2236, 2645, 1546, 1846, 2225]
          }
        ]
      },
      option3: {
        grid: {
          top: '24',
          left: '24',
          right: '24',
          bottom: '5%',
          containLabel: true
        },
        color: ['#409EFF'], // 柱状图颜色
        tooltip: {
          formatter: function (params) {
            var dates = ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年']
            console.log(params)
            var tar
            // if (params[1].value !== '-') {
            //     tar = params[1];
            // }
            // else {
            tar = params[0]
            // }
            return dates[tar.dataIndex] + '<br>' + '<span style=" display: inline-block;width: 8px; height: 8px; background-color: #409EFF;margin-right:5px"> </span>' + tar.name + '&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + tar.value + '</b>'
          },
          backgroundColor: 'rgba(255,255,255,0.8)', // 提示框背景颜色
          trigger: 'axis',
          textStyle: {
            color: '#7B7B7D'
          },
          axisPointer: {
            // backgroundColor: '#409EFF'
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['热词1', '热词2', '热词3', '热词4', '热词5', '热词6', '热词7', '热词8', '热词9', '热词10'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            data: [11995, 14666, 21444, 32858, 13654, 22236, 12645, 31546, 41846, 22225]
          }
        ]
      }
    }
  },
  created () {
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById('chart_example'))
    window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    this.chartContainer.setOption(this.option)
  },
  methods: {

    setNewOptions (val) {
      this.currentItem = val
      if (val === 'day') {
        this.chartContainer.setOption(this.option)
      }
      if (val === 'week') {
        this.chartContainer.setOption(this.option2)
      }
      if (val === 'month') {
        this.chartContainer.setOption(this.option3)
      }
    }
  }
}
</script>
