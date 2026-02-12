<template>
 
    <draggable  :group="groupA"   :list="treeListData" forceFallback="true"
                         animation="100"
                       @start="onStart" @end="onEnd">
        
          <!-- <transition-group :style="style"> -->

    <!-- <ul class="tree" :key="currentId()"> -->
      <div class="tree" v-for="(item, index) in treeListData"   :key="item.value" >
        <span @click="treeItem(item)" v-if="item.target === 'node'">
         <!-- <input type="text" v-model="item.label" > -->
<!-- {{ item.label }} -->
          <component :is="item.type" v-model="item.label">{{ item.label }}</component>

          </span>
        <child40   :treeListData="item.children" :currentNode="currentNode" v-if="item.target === 'layout'"></child40>
        <div class="dropzone"
        @dragover="allowDrop"
        @drop="handleDrap($event, item)"
        v-if="item.target === 'layout'"
      >
       拖入控件</div>
      </div>
      
    <!-- </ul> -->
    <!-- </transition-group> -->
    </draggable>
 
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
  name: 'child40',
//   props: [ 'treeListData' ],
 
    props: {
        treeListData: {
      required: true,
      type: Array
    },
    currentNode: {
      required: true
    },
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
      if (this.currentNode.target === "layout") {
        data.children.push({
          ...this.currentNode,
          id: guid(),
          children: []
        });
      } else {
        data.children.push({
          ...this.currentNode,
          id: guid(),
          inform: true,
 
        });
      }
      //   拖拽完成 设置动作为空，避免用户拖动空元素 添加组件
      this.currentNode.target = "";

    }
  }
}
</script>
