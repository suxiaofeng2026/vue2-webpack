<template>
    <div>

       <template   v-for="(item, index) in treeListData"   >
         
              <el-form-item label="活动名称" :prop="item.name"  >
    <el-input v-model="ruleForm[item.name]"></el-input>
  </el-form-item>
  <child45   :treeListData="item.children" :ruleForm="ruleForm" v-if="item.children.length>0"></child45>
         
       </template>

 </div>
 
 
 
</template>
<style lang="less">
.tree{
  margin-left: 50px;
}
</style>
<script>
import draggable from 'vuedraggable'
import textInput from './input'
import { guid } from "@/utils/common";
export default {
  name: 'child45',
//   props: [ 'treeListData' ],
 
    props: {
        treeListData: {
      required: true,
      type: Array
    },
    ruleForm:{}
  },
  components: {
    textInput,draggable
  },
  data () {
    return {
        drag: false,
        style:{},
      cName: 'textInput',
      input: 'input',
      groupA: {
            name: guid(),
            put: true, //可以拖入
            pull: true, 
            // pull: () => {
            //   if (this.arr1.length <= 3) {
            //     this.message = "元素小于等于3不允许再拖拽了";
            //   }
            //   return this.arr1.length > 3;
            // },
          },
    }
  },
 
  methods: {
          //开始拖拽事件
          onStart() {
        this.drag = true;
      },
      //拖拽结束事件
      onEnd() {
        this.drag = false;
      },
    currentId(){
        return guid()
    },
    treeItem (item) {
      item.isOpen = !item.isOpen
    },
    allowDrop(e) {
      e.preventDefault();
    },
    handleDrap(e, data) {
      e.preventDefault();
      // console.log(e,"========")
      console.log(data, "========");
      console.log(e.target.className);
      data.push({
        label: '添加',
          value: '默认值',
          children:[]
      })
    }
  }
}
</script>
