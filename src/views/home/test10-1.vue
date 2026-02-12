<template>
    <div>

      <div id="chart_example" style="width:100%;height: 600px;"></div>

    </div>
  </template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      option: {
        title: {
          text: '关系图实例'
        },
        tooltip: {
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            symbol: 'roundRect', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            tooltip: { // 提示框的配置
              formatter: function (param) {
                return param.data.category
              }
            },

            data: [{
              name: '节点1-1',
              x: 300,
              y: 100
            },
            {
              name: '节点1-2',
              x: 300,
              y: 300
            },
            {
              name: '节点2',
              x: 550,
              y: 300
            }, {
              name: '节点3',
              x: 550,
              y: 100
            }, {
              name: '节点4',
              x: 550,
              y: 500
            },
            {
              name: '节点5',
              x: 650,
              y: 500
            }],
            links: [ {
              source: '节点1-1',
              target: '节点3',
              category: '联系关系描述1',
              lineStyle: {
                normal: {
                  color: '#234921',
                  type: 'dotted',
                  width: 2,
                  curveness: 0.2
                }
              }
            }, {
              source: '节点1-1',
              target: '节点4',
              category: '联系关系描述4'
            },
            {
              source: '节点1-1',
              target: '节点2',
              category: '联系关系描述4'
            },
            {
              source: '节点4',
              target: '节点5',
              category: '联系关系描述5'
            },
            {
              source: '节点1-2',
              target: '节点4',
              category: '节点1-2到节点4 联系关系描述5'
            },
            {
              source: '节点1-2',
              target: '节点2',
              category: '节点1-2到节点2 联系关系描述5'
            },
            {
              source: '节点1-2',
              target: '节点3',
              category: '节点1-2到节点2 联系关系描述5'
            }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
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

  }
}
</script>
