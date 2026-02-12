<template>
  <div class="infoContainer">
    <el-row :gutter="10">
      <el-col :span="8" v-for="(item, index) in dataList" :key="'htr' + index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item[Object.entries(item)[0][0]] }}</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="getData(index,item)"
              >调用事件</el-button
            >
          </div>
          <div
            v-for="(value, key, subIndex) in item"
            :key="index + '-' + subIndex"
            class="text item"
          >
            {{ value }}
            <!-- {{item[columns[subIndex-1].key]}} -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  margin-bottom: 10px;
}
</style>
<script>
export default {
  props: {
    dataList: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] }
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
    getData (index, row) {
      console.log(this.$parent)
      this.$parent.$parent.openEdit(index, row)
      // console.log(row)
      // alert('我是模版中自定义的事件')
    }
  }
}
</script>
