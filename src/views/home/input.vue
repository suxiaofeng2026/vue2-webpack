<template>
  <div>
    <el-input
      type="textarea"
      :maxlength="len"
      autosize
      placeholder="请输入内容"
      :value="value"
      @input="changeInput"
    ></el-input>
    <button @click='add'>新增值</button>
    <p>{{num}}/{{len}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      len: 150
    }
  },
  props: {
    value: String || Number
  },
  methods: {
    add () {
      this.$emit('input', this.value + 'a')
    },
    changeInput (e) {
      this.num = e.length
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
