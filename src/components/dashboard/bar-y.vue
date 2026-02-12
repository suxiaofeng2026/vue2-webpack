<template>
  <div>
    <div :id="id" style="width:100%;height: 300px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      id: new Date().getTime() + this.randomString(8),
      chartContainer: '',
      option: {
        title: {
          left: 'center',
          text: '各语料字符量分布',
          textStyle: {
            // 文字颜色
            color: '#aaa',
            // 字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            // 字体系列
            fontFamily: 'sans-serif',
            // 字体大小
            fontSize: 14
          }
        },
        dataset: {
          source: [
            ['amount', 'product'],
            [58212, '2015年1月'],
            [78254, '2015年2月'],
            [41032, '2015年3月'],
            [12755, '2015年4月'],
            [20145, '2015年5月']
          ]
        },
        // grid: { containLabel: true },
        xAxis: {

          axisLabel: {
            interval: 0,
            // rotate: 20,
            fontSize: 10 // 更改坐标轴文字大小
          } },
        yAxis: { type: 'category'
        },
        series: [
          {
            type: 'bar',
            // 设置柱状图大小
            barWidth: 20,
            itemStyle: {
              // normal: {
              //   color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              //     offset: 0,
              //     color: '#1268f3' // 0% 处的颜色
              //   }, {
              //     offset: 0.6,
              //     color: '#08a4fa' // 60% 处的颜色
              //   }, {
              //     offset: 1,
              //     color: '#01ccfe' // 100% 处的颜色
              //   }], false)
              // }
              color: function (params) {
                var colorList = ['#015792', '#0392ce', '#006857', '#013f58', '#8dc7dd']
                return colorList[params.dataIndex]
              }

            },
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      }
    }
  },
  created () {
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById(this.id))
    window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    this.chartContainer.setOption(this.option)
  },
  methods: {
    randomString (len) {
      len = len || 32
      let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      let maxPos = $chars.length
      let pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd
    }
  }
}
</script>
