<template>
    <div class="picChartContainer">
      <h1>
        <i>热门词汇统计</i>
      </h1>
      <div id="pie1" style="width:100%;height: 350px;">
       </div>
       <span><i></i>热门关键词点击率 <b>80.8%</b></span>
    </div>

</template>

<style lang="less">
.picChartContainer{
  border:1px solid #EBEEF5;
&>h1{
  line-height: 54px;
  font-size: 16px;
  color: #252525;
  border-bottom:1px solid #EBEEF5;
    &>i{
    font-style: normal;
    margin-left: 24px;
  }
}
&>span{
display: block;
width: 100%;
text-align: center;
margin-top:-20px ;
font-size: 12px;
padding-bottom: 60px;
color: #303133;
&>i{
  display: inline-block;
  height: 6px;
  width: 6px;
  background-color: #409EFF;
  margin-right:5px;
}
&>b{
  margin-left: 24px;
  color: #409EFF;
}

}

}
</style>
<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {

      chartContainer: '',
      option: {
        color: ['#2AAEFF', '#C0C4CC'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            // avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'center'
            },

            // labelLine: {
            //     show: false
            // },
            data: [
              { value: 80,
                name: '热门关键词点击率',
                label: {
                  formatter: [
                    '{title|点击}',
                    '{abg|{d}%}'

                  ].join('\n'),

                  rich: {
                    title: {
                      color: '#303133',
                      align: 'center',
                      fontSize: '14px'
                    },
                    abg: {
                      color: '#303133',
                      width: '100%',
                      align: 'right',
                      height: 60,
                      fontSize: '36px'

                    }
                  }
                }
              },
              { value: 20, name: '其他', label: { formatter: '' } }

            ]
          }
        ]
      }

    }
  },
  created () {
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById('pie1'))
    window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    this.chartContainer.setOption(this.option)
  },
  methods: {

  }
}
</script>
