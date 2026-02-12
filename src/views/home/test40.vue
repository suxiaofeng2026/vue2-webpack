<template>
  <div class="myVueDrageContainer">
    <span>
      <h1>元件框库</h1>
      <ul>
        <li
          draggable
          v-for="(item, index) in nodeList"
          @dragstart="handleDragstart($event, item)"
          @dragend="handleDragEnd($event, item)"
          :key="'node' + index"
          class="source"
        >
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </span>
    <div>
        
        <child40 :treeListData="treeData"  :currentNode="currentNode" @updata="updata"></child40>
 
        <pre>
              {{ treeData }}
        </pre>
      
 
    <!--   <div
        class="dropzone2"
        @dragover="allowDrop"
        @drop="handleDrap($event, '+++')"
      >
        ++++++++++++++
      </div> -->
    </div>
  </div>
</template>

<script>
import { guid } from "@/utils/common";
import draggable from 'vuedraggable'
import child40 from './child40'
export default {
  data() {
    return {
        nodeList: [
          {
            label: "分组",
            type:"group",
            target:"layout"
          },
          {
            label: "面板",
            type:"panel",
            target:"layout"
          },
          {
            label: "选项卡",
            type:"tab",
            target:"layout"
          },
          {
            label: "拆分面板",
            type:"dblpanel",
            target:"layout"
          },
          {
            label: "输入框",
            type:"elInput",
            target:"node"
          },
          {
            label: "按钮",
            type:"elButton",
            target:"node"
          }
        ],
        currentNode:{},
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
 
      
      treeData: [
      {
          label: '主容器',
          type: 'group',
          target:"layout",
          id:guid(),
          children:[]
        }
      ]
    };
  },
  components: {
    child40,draggable
  },
  methods: {
    init() {},
    updata(data){
        
        this.treeData=data
    },
 
    handleDragstart(e, item) {
    //   this.offsetX = e.offsetX;
    //   this.offsetY = e.offsetY;
    console.log(e, "====start====");
      console.log(item);
      console.log(e.target.className);
      this.currentNode=JSON.parse(JSON.stringify(item))
    },
    handleDragEnd(e, item) {
      console.log(e, "========");
      console.log(item);
      console.log(e.target.className);
    },
    allowDrop(e) {
      e.preventDefault();
    },
    handleDrap(e, data) {
      e.preventDefault();
      // console.log(e,"========")
      console.log(data, "========");
      console.log(e.target.className);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less">
.myVueDrageContainer {
    display: flex;
    height: calc(100vh - 120px);
    & > span {
      width: 200px;
      // display: block;
      background-color: #fdf8f8;
      padding: 10px;
      height: 100%;
      &>h1{
        font-size: 16px;
      }
      & > ul {
        margin-top: 10px;
        margin-left: 10px;
        &>li{
            line-height: 2;
            font-size: 14px;
            cursor: move;
        }
      }
    }
    & > div {
      flex: 2;
      height: 100%;
      .tree{
        border: 1px #b3aeae;
        border-style: dashed;
        padding: 10px;
        margin: 5px;
         
        // position: relative;
        background-color: #fff;
      }
      .dropzone{
        border: 1px #dbd4d4;
        border-style: dashed;
        padding: 5px;
        margin: 5px;
         
        position: relative;
        background-color: #fff;
        text-align: center;
        font-size: 12px;
      }
      .componentzone{
        position: absolute;
      }
    }
}
</style>
