<template>
 <div id="canvas-container" style="float: left">
        <canvas id="canvas" width="800px" height="600px"></canvas>
    </div>
</template>

<script>

import wordCloud from 'wordcloud'

export default {
  name: 'WordCloudChart',
  data () {
    return {

    }
  },

  mounted () {
    var wordFreqData = [['各位观众', 45], ['词云', 21], ['来啦!!!', 13]]
    var canvas = document.getElementById('canvas')
    var options = {
      'list': wordFreqData, // 或者[['各位观众',45],['词云', 21],['来啦!!!',13]],只要格式满足这样都可以
      'gridSize': 6, // 密集程度 数字越小越密集
      'weightFactor': 1, // 字体大小=原始大小*weightFactor
      'maxFontSize': 60, // 最大字号
      'minFontSize': 14, // 最小字号
      'fontWeight': 'normal', // 字体粗细
      'fontFamily': 'Times, serif', // 字体
      'color': 'random-light', // 字体颜色 'random-dark' 或者 'random-light'
      'backgroundColor': '#fff', // 背景颜色
      'rotateRatio': 1 // 字体倾斜(旋转)概率，1代表总是倾斜(旋转)
    }
    // 生成
    wordCloud(canvas, options)
  },
  beforeDestroy () {
    // if (!this.chart) {
    //   return;
    // }
    // this.chart.dispose();
    // this.chart = null;
  },
  methods: {

  }
}
</script>
