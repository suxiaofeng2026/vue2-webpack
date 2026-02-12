<template>
<div>
  <el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText">
</el-input>
</div>
</template>
<script>
export default {
  watch: {
    filterText (newVal, oldVal) {
      console.log({ new: newVal, old: oldVal })
    }
  },

  methods: {

  },

  data () {
    return {
      filterText: ''
    }
  }
}
</script>
