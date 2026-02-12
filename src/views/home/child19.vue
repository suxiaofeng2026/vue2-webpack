<template>
  <div class="tree">

   <div v-for="(item, index) in treeListData" :key="index+'zz'">
     <el-form-item
   style="width:200px;"
    :key="index"
    :label="'域名' + index"
    :prop="purl+'[' + index + '].value'"
    :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  >
     <component :is="textInput" v-model="item.value" :index="index"></component>
  </el-form-item>
  {{purl+'[' + index + '].value'}}
  <Ptree :treeListData="item.domains" :purl="purl+'[' + index + '].domains'"></Ptree>
  </div>
  </div>
</template>
<style lang="less">
.tree{
  margin-left: 50px;
}
</style>
<script>
// 首先，这里需要把prop改成:prop并且添加内容，
// 例如:prop="‘purchase_list.’+index +’.goods_price’" ，其中第一个参数为被循环的数组的名称，第二个参数为数组中对应的字段名称
import textInput from '@/components/basicComponent/TextInput'
import timeSelector from '@/components/basicComponent/TimeSelector'
export default {
  name: 'Ptree',
  props: [ 'treeListData', 'purl' ],
  components: {
    textInput, timeSelector
  },
  data () {
    return {
      textInput: 'textInput',
      input: 'input'
    }
  },
  methods: {
  }
}
</script>
