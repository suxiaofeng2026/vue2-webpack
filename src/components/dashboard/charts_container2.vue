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
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告'],
          bottom: 'bottom'
        },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['文本分类', '关系抽取', '卡槽提取', '文本摘要']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            symbol: 'none', // 取消折点圆圈
            // smooth: true, // 折线平滑
            stack: '总量',
            itemStyle: {
              normal: {
                color: '#015792', // 改变折线点的颜色
                lineStyle: {
                  color: '#015792' // 改变折线颜色
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            symbol: 'none', // 取消折点圆圈
            // smooth: true, // 折线平滑
            stack: '总量',
            itemStyle: {
              normal: {
                color: '#0392ce', // 改变折线点的颜色
                lineStyle: {
                  color: '#0392ce' // 改变折线颜色
                }
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
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
