<template>
  <div>
    查看控制台
  </div>
</template>
<script>
import fetch from '@/utils/fetch'
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.getData()
    this.getData2()
  },
  methods: {
    async getData () {
      let data = await fetch.get('api/newsdetails.php', { params: { 'id': 89 } })
      let data2 = await this.child()
      // axios本身就是promise对象 所以不用再封装
      let data4 = await axios.get('api/newsdetails.php', { params: { 'id': 91 } })
      let data5 = await Promise.all([axios.get('api/newsdetails.php', { params: { 'id': 89 } }), axios.get('api/newsdetails.php', { params: { 'id': 91 } })])
      this.child2()
      // 将对象一与二组合成一个数组返回给data5
      console.log('第一步')
      console.log(data)
      console.log('================')
      console.log('第二步')
      console.log(data2)
      console.log('================')
      console.log('第四步')
      console.log(data4)
      console.log('================')
      console.log('第五步')
      console.log(data5)
      console.log('================')
    },
    async child () {
      return axios.get('api/newsdetails.php', { params: { 'id': 91 } })
    },
    child2 () {
      axios.get('api/newsdetails.php', { params: { 'id': 91 } }).then(function (res) {
        console.log('child2')
        console.log(res)
      })
    },
    getData2 () {
      let data = fetch.get('api/newsdetails.php', { params: { 'id': 90 } }).then(function (res) {
        console.log(res)
      })
      console.log('第三步')
      console.log(data)
    }
  }
}
</script>
