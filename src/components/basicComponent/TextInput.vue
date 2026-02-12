<template>
  <div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      :value="value"
      v-model="currentValue"
      @input="changeInput"
    ></el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentValue: this.value
    }
  },
  props: ['dd', 'index', 'value'],
  methods: {
    changeInput (e) {
      this.num = e.length
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
