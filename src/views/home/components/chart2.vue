<template>
  <div id="word_cloud_view_id" style="height:400px;width:400px"></div>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud'
export default {
  data: () => ({
    word_cloud_view: null,
    word_cloud_options: {},
    word_list: [{ 'name': '需求', 'value': 10927 }, { 'name': '修改', 'value': 5902 }, { 'name': '需求', 'value': 10927 }, { 'name': '修改', 'value': 5902 }, { 'name': '需求', 'value': 10927 }, { 'name': '修改', 'value': 5902 }, { 'name': '需求', 'value': 10927 }, { 'name': '修改', 'value': 5902 }, { 'name': '需求', 'value': 10927 }, { 'name': '修改', 'value': 5902 }, { 'name': '需求', 'value': 10927 }, { 'name': '修改', 'value': 5902 } ]
  }),

  created () {
  },
  mounted () {
    this.draw_word_cloud_view()
    this.init_view_data()
  },
  methods: {
    draw_word_cloud_view () {
      if (this.word_cloud_view) {
        this.word_cloud_view.dispose()
      }
      this.word_cloud_view = document.getElementById('word_cloud_view_id') && echarts.init(document.getElementById('word_cloud_view_id'), 'macarons')
      this.word_cloud_view && this.word_cloud_view.setOption(this.word_cloud_options)
    },
    init_view_data () {
      let wordCloudSeries = [{
        type: 'wordCloud',
        shape: 'circle',
        // maskImage: maskImage,
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
        sizeRange: [6, 60],
        rotationRange: [-45, 90],
        autoSize: {
          enable: true,
          minSize: 6
        },
        textPadding: 0,
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 256),
                Math.round(Math.random() * 256),
                Math.round(Math.random() * 256)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: this.word_list
      }]

      this.word_cloud_options = {
        series: wordCloudSeries
      }
      this.word_cloud_view.setOption(this.word_cloud_options)
    }
  }
}
</script>
