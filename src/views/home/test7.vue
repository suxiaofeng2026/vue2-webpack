<template>
  <div>
    <div id="charttt" style="width:100%;height: 600px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      series: {}
    }
  },
  mounted () {
    var line_direction_option = {
      grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: '4%'
      },
      xAxis: {
        type: 'value',
        boundaryGap: false,
        show: false
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 20,
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#777777'
          }
        },
        data: []
      },
      {
        type: 'lines',
        symbol: ['none', 'none'],
        symbolSize: 10,
        coordinateSystem: 'cartesian2d',
        label: {
          show: true,
          position: 'middle'
        },
        lineStyle: {
          normal: {
            color: '#777777',
            width: 1,
            opacity: 1,
            curveness: -0.1
          }
        },
        effect: {
          show: true,
          smooth: false,
          trailLength: 0,
          symbol: 'circle', // arrow 箭头 circle 圆
          color: '#777777',
          symbolSize: 10
        },
        data: []
      }
      ]
    }
    function init_point_line_graph (id, points, lines) {
      var line_directionChart = echarts.init(document.getElementById(id))
      var option = JSON.parse(JSON.stringify(line_direction_option))
      option.series[0].data = points
      option.series[1].data = lines
      console.log(option)
      line_directionChart.setOption(option)
      return line_directionChart
    }
    let data = {
      points: [{ 'name': '1', 'value': [20, 76] }, { 'name': '2', 'value': [44, 12] }],
      lines: [{ 'name': '1-2', 'coords': [[20, 76], [44, 12]] }, { 'name': '2-1', 'coords': [[44, 12], [20, 76]] }]
    }
    init_point_line_graph('charttt', data.points, data.lines)
    // this.chartContainer = echarts.init(document.getElementById('charttt'))
    // window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    //
    // this.chartContainer.setOption(option)
  }
}
</script>
