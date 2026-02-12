export const optionList = {
  'option1': {
    'title': {
      'left': 'center',
      'text': '各语料来源占比',
      'textStyle': {
        'color': '#aaa',
        'fontStyle': 'normal',
        'fontWeight': 'normal',
        'fontFamily': 'sans-serif',
        'fontSize': 14
      }
    },
    'tooltip': {
      'trigger': 'item',
      'formatter': '{b} : {c} ({d}%)'
    },
    'legend': {
      'left': 'center',
      'bottom': 'bottom',
      'data': ['标注平台', '本地']
    },
    'series': [{
      'name': '访问来源',
      'type': 'pie',
      'radius': '70%',
      'center': ['50%', '50%'],
      'labelLine': {
        'show': false
      },
      'data': [{
        'value': 335,
        'name': '标注平台'
      }, {
        'value': 310,
        'name': '本地'
      }],
      'itemStyle': {
        'normal': {
          'label': {
            'show': false
          },
          'labelLine': {
            'show': false
          }
        }
      }
    }]
  },
  'option2': {
    'title': {
      'left': 'center',
      'text': '各任务类型语料数',
      'textStyle': {
        'color': '#aaa',
        'fontStyle': 'normal',
        'fontWeight': 'normal',
        'fontFamily': 'sans-serif',
        'fontSize': 14
      }
    },
    'tooltip': {
      'trigger': 'axis'
    },
    'legend': {
      'data': ['邮件营销', '联盟广告'],
      'bottom': 'bottom'
    },
    'grid': {
      'left': '8%',
      'right': '8%',
      'bottom': '15%',
      'containLabel': true
    },
    'xAxis': {
      'type': 'category',
      'boundaryGap': false,
      'data': ['文本分类', '关系抽取', '卡槽提取', '文本摘要']
    },
    'yAxis': {
      'type': 'value'
    },
    'series': [{
      'name': '邮件营销',
      'type': 'line',
      'symbol': 'none',
      'stack': '总量',
      'itemStyle': {
        'normal': {
          'color': '#015792',
          'lineStyle': {
            'color': '#015792'
          }
        }
      },
      'data': [120, 132, 101, 134, 90, 230, 210]
    }, {
      'name': '联盟广告',
      'type': 'line',
      'symbol': 'none',
      'stack': '总量',
      'itemStyle': {
        'normal': {
          'color': '#0392ce',
          'lineStyle': {
            'color': '#0392ce'
          }
        }
      },
      'data': [220, 182, 191, 234, 290, 330, 310]
    }]
  },
  'option3': {
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
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        // rotate: 20,
        fontSize: 10 // 更改坐标轴文字大小
      },
      data: ['小于1m', '1-5m', '6-10m', '11-15m', '16-20m', '21-25m', '26-30m', '31-35m', '36-40m', '41-45m', '46-50m', '51-55m', '56-60m', '大于60m']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      // 设置柱状图大小
      barWidth: 20,
      itemStyle: {
        // normal: {
        //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
        // 这里是重点
        color: function (params) {
          var colorList = ['#0392ce', '#aaa']
          return colorList[params.dataIndex]
        }

      }
    }]
  },
  'option4': {
    title: {
      left: 'center',
      text: '启动训练任务的时间分布',
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
  },
  'option5': {
    title: {
      left: 'center',
      text: '训练时长分布',
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
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        // rotate: 20,
        fontSize: 10 // 更改坐标轴文字大小
      },
      data: ['小于1小时', '1-6小时', '6-12小时', '12-18m', '18-24m', '大于24小时']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      // 设置柱状图大小
      barWidth: 30,
      itemStyle: {
        // normal: {
        //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
        // 这里是重点
        color: function (params) {
          var colorList = ['#0392ce']
          return colorList[0]
        }
      }
    }]
  }
}
