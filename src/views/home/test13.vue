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
      chartContainer: ''
    }
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById(this.id))
    this.initChart()
  },
  methods: {
    initChart () {
      let diskData = require('./test13-data.json')
      // let that = this

      // function colorMappingChange (value) {
      //   var levelOption = getLevelOption(value)
      //   that.chartContainer.setOption({
      //     series: [{
      //       levels: levelOption
      //     }]
      //   })
      // }
      console.log(diskData)
      var formatUtil = echarts.format

      function getLevelOption () {
        return [
          {
            itemStyle: {
              normal: {
                borderColor: '#777',
                borderWidth: 0,
                gapWidth: 1
              }
            },
            upperLabel: {
              normal: {
                show: false
              }
            }
          },
          {
            itemStyle: {
              normal: {
                borderColor: '#555',
                borderWidth: 5,
                gapWidth: 1
              },
              emphasis: {
                borderColor: '#ddd'
              }
            }
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              normal: {
                borderWidth: 5,
                gapWidth: 1,
                borderColorSaturation: 0.6
              }
            }
          }
        ]
      }

      this.chartContainer.setOption({

        title: {
          text: 'Disk Usage',
          left: 'center'
        },

        tooltip: {
          formatter: function (info) {
            var value = info.value
            var treePathInfo = info.treePathInfo
            var treePath = []

            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name)
            }

            return [
              '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
              'Disk Usage: ' + formatUtil.addCommas(value) + ' KB'
            ].join('')
          }
        },

        series: [
          {
            name: 'Disk Usage',
            type: 'treemap',
            visibleMin: 300,
            label: {
              show: true,
              formatter: '{b}'
            },
            upperLabel: {
              normal: {
                show: true,
                height: 30
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff'
              }
            },
            levels: getLevelOption(),
            data: diskData
          }
        ]
      })
    },
    randomString (len) {
      len = len || 32
      let $chars =
        'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
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
