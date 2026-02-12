<template>
  <div>
    <input type="text" v-model="msg">
    <iframe src="./graph/index.html?id=aaa" frameborder="0" style="width: 100%;height: 300px;"></iframe>
    <div v-for="(item,index) in objectList" :key="index">{{index}}->{{item}}</div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data () {
    return {
      msg: '',
      objectList: { a: 'aaa', b: 'bbb', c: 'ccc' }
    }
  },
  watch: {
    msg (val) {
      console.log(val)
      _.debounce(() => { console.log('debounce') }, 150)()
    }
  },
  mounted () {
    window.onresize = () => {
      console.log(document.documentElement.clientHeight)
    }
  },
  methods: {
  }
}
</script>
