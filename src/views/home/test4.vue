<template>
  <div>
     <div class="scroll">
        <div class="content" id="lisContainer">
          <div id="list">
            <div v-if="done">loading</div>
             <p v-for="(item,index) in list" :key=index>{{item}}</p>
          </div>
        </div>
    </div>
    <button @click='add'>新增</button>
    <el-slider v-model="smoothRate" :format-tooltip="formatTooltip"></el-slider>
    {{option.series}}
    <div id="chart_example" style="width:100%;height: 600px;"></div>

  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      count: 0,
      done: false,
      list: [ ],
      list2: [
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '1111111111111111',
        '12345',
        '23456',
        '34567',
        'ttttt',
        'ttttt',
        'ttttt',
        'ttttt',
        'ttttt',
        'ttttt',
        'ttttt',
        'ttttt',
        'ttttt'
      ],
      chartContainer: '',
      smoothRate: 50,
      option: {
        dataZoom: [
          {
            type: 'inside' // 详细配置可见echarts官网
          }
          // {
          //   type: 'slider',
          //   xAxisIndex: 0,
          //   filterMode: 'empty'
          // },
          // {
          //   type: 'slider',
          //   yAxisIndex: 0,
          //   filterMode: 'empty'
          // }
        // {
        //   type: 'inside',
        //   xAxisIndex: 0,
        //   filterMode: 'empty'
        // },
        // {
        //   type: 'inside',
        //   yAxisIndex: 0,
        //   filterMode: 'empty'
        // }
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          name: 'step',
          nameTextStyle: {
            color: '#93939b'
          },
          axisLabel: {
            textStyle: {
              color: '#93939b', // 更改坐标轴文字颜色
              fontSize: 8 // 更改坐标轴文字大小
            }
          },
          axisLine: {
            lineStyle: {
              color: '#e7e7ea',
              width: 0.5// 这里是为了突出显示加上的
            }
          } },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 8 // 刻度线标注大小
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#f3f3f5']
            }
          },
          axisLine: {
            lineStyle: {
              color: '#93939b',
              width: 0.5// 这里是为了突出显示加上的
            },
            show: false },
          axisTick: { show: false },
          nameTextStyle: {
            color: '#338dd8'
          }
        },
        series: [{
          symbol: 'none', // 这句就是去掉点的
          itemStyle: {
            normal: {
              color: '#000', // 折线点的颜色
              lineStyle: {
                width: 0.5,
                color: '#409eff'// 折线的颜色
              }
            }
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: 0.5 // 这句就是让曲线变平滑的
        }]
      }
    }
  },
  watch: {
    smoothRate (val) {
      let that = this
      that.option.series[0].smooth = val / 100
      that.chartContainer.setOption(that.option)
    }
  },
  created () {

  },
  mounted () {
    let divHeight = document.getElementById('list').offsetHeight
    document.getElementById('lisContainer').scrollTop = divHeight - 300

    this.chartContainer = echarts.init(document.getElementById('chart_example'))
    window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    this.chartContainer.setOption(this.option)
    this.add()
    this.regScoll()
  },
  methods: {

    regScoll () {
    // 获取节点
      var scrollDiv = document.getElementById('lisContainer')
      // 绑定事件
      scrollDiv.addEventListener('scroll', () => {
        console.log(scrollDiv.scrollTop)
        if (scrollDiv.scrollTop <= 10 && !this.done) {
          this.add()
        }
      })
    },
    add () {
      this.count++
      console.log('我被调用了')
      this.done = true // loading标识 标识文件正在拉去数据中
      setTimeout(() => {
        let height1 = document.getElementById('list').offsetHeight
        // document.getElementById('lisContainer').scrollTop = this.divHeight
        this.list = this.list2.concat(this.list)
        setTimeout(() => {
          var height2 = document.getElementById('list').offsetHeight
          document.getElementById('lisContainer').scrollTop = height2 - height1

          this.done = false
        }, 5)
      }, 5000)
    },
    formatTooltip (val) {
      return val / 100
    }
  }
}
</script>
<style>
.scroll{
  padding: 10px;
  background-color: #000
}
.content{
      height: 300px; /*必须设定滚动部分的高度*/
      /* background-color: #000; */
      color: #fff;
      line-height: 1.5;
      font-size: 12px;
      overflow-x: hidden; /*x轴禁止滚动*/
      overflow-y: scroll;/*y轴滚动*/
      scrollbar-width: none; /*隐藏滚动条兼容火狐*/
       -ms-overflow-style: none; /* 藏滚动条兼容IE10+ */
  }

  .content::-webkit-scrollbar {
      display: none;/*隐藏滚动条*/
  }

</style>
