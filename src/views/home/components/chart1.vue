<template>
    <div class="mainChartContainer1">
         <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"

      :showTooltip="false"
      :wordClick="wordClickHandler">
      </wordcloud>
    </div>

</template>
<style lang="less">

.mainChartContainer1{
  border:1px solid #EBEEF5;
  &>div{
    padding: 10px;
    img{
      width: 100%;
    }
  }
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

}
</style>
<script>
import wordcloud from 'vue-wordcloud'
export default {
  data () {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      wordList: [],
      defaultWords: [{
        'name': '猫',
        'value': 26
      },
      {
        'name': '鱼',
        'value': 19
      },
      {
        'name': 'things',
        'value': 18
      },
      {
        'name': 'look',
        'value': 16
      },
      {
        'name': 'two',
        'value': 15
      },
      {
        'name': 'fun',
        'value': 9
      },
      {
        'name': 'know',
        'value': 9
      },
      {
        'name': 'good',
        'value': 9
      },
      {
        'name': 'play',
        'value': 6
      }
      ]

    }
  },
  created () {
  },
  components: {
    wordcloud
  },
  mounted () {

  },
  methods: {
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    }
  }
}
</script>
