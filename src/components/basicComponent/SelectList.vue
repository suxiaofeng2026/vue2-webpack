<template>
    <el-select @input="changeInput" >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    value: String || Number
  },
  methods: {
    changeInput (e) {
      this.num = e.length
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
