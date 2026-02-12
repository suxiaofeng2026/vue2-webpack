<template>
  <div>
    <div v-for="(item,index) in list2" style=" margin-bottom:80px;">
      <!-- {{item}} -->
      {{index}}
      <div v-for="subitem in orderList(item)" >
        <p>{{subitem.label}}:{{subitem.value}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data () {
    return {
      list: {
        avg: { p: 0.9814, a: 0.9905, r: 0.9905, s: 20244, f: 0.9859 },
        CHICHAT: { p: 0.9877, a: 0.9904, r: 0.9929, s: 16870, f: 0.9852 },
        BUSINESS: { p: 0.9853, a: 0.9903, r: 0.9981, s: 3374, f: 0.9976 }
      },
      list2: {},
      tabsList: [
        { name: '', label: '基本信息' },
        { name: '', label: '图表数据' },
        { name: '', label: '日志' }
      ]
    }
  },
  mounted () {
    this.removeArr('图表数据')
    this.formatedt()
  },
  methods: {
    formatedt () {
      let arrList = {}
      let that = this
      // 行列转换
      for (let subKeyName in that.list[Object.keys(that.list)[0]]) {
        arrList[subKeyName] = []
        for (let keyName in that.list) {
          arrList[subKeyName].push({ label: keyName, value: that.list[keyName][subKeyName] })
        }
      }
      for (let keyName in arrList) { console.log(_.orderBy(arrList[keyName], ['value'], ['desc'])) }
      this.list2 = arrList
      console.log(arrList)
    },
    orderList (arr) {
      return _.orderBy(arr, ['value'], ['desc'])
    },
    removeArr (val) {
      let that = this
      that.tabsList = that.tabsList.filter(function (item) { if (item.label !== val) return item })
    }
  }
}
</script>
