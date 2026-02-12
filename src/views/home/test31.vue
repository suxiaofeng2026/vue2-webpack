<template>
  <div >
    <child :items="item" :isOrdered="status"/>
    <child2 :fatherid="fatherid" @fathermethod="parentClick" />
  </div>
</template>
<script>
import child from './test31-child'
import child2 from './test31-child2'
export default {
  data () {
    return {
      fatherid: 111,
      item: ['a', 'b'],
      status: true,
      message: '我是父组件的data'
    }
  },
  components: { child, child2 },
  methods: {
    parentClick () {
      console.log('我是父级按钮')
    }
  }
}
</script>
