<template>
 <el-form-item label="活动名称" prop="name">
     <el-date-picker
      :value="value"
      @input="changeInput"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      placeholder="选择日期时间"
       v-model="currentValue"
      >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: String
  },
  methods: {
    changeInput (e) {
      // this.num = e.length
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
