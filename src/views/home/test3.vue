<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in tabList" :label="item.label" :key="index+''" :name="index+''" ></el-tab-pane>
    </el-tabs>
    <div id="chart_example" style="width:100%;height: 600px;"></div>
    <div @click="setNewOptions">点击我改变数据</div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return { tabList: [
      { label: '用户管理', name: '0', path: '/main/index' },
      { label: '配置管理', name: '1', path: '/main/test2' },
      { label: '角色管理', name: '2', path: '/main/index' },
      { label: '定时任务补偿', name: '3', path: '/' }
    ],
    activeName: '0',
    chartContainer: '',
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
    },
    option2: {
      title: {
        text: '关系图实例'
      },
      tooltip: {},
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
            name: '节点1-3',
            x: 300,
            y: 500
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
            category: 'zzzzzzzzzzzzz'
          }, {
            source: '节点1-1',
            target: '节点4',
            category: 'ffffffffffffffffff'
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
          },
          {
            source: '节点1-3',
            target: '节点4',
            category: '节点1-2到节点4 联系关系描述5'
          },
          {
            source: '节点1-3',
            target: '节点2',
            category: '节点1-2到节点2 联系关系描述5'
          },
          {
            source: '节点1-3',
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
    handleClick (tab, event) {
      console.log(tab.index)
      console.log(this.tabList[tab.index].path)
      this.$router.push({ path: this.tabList[tab.index].path })
      // console.log(tab, event)
    },
    setNewOptions () {
      this.chartContainer.setOption(this.option2)
    }
  }
}
</script>
