<template>
  <div class="myDrageContainer">
    <span>
      <h1>元件框库</h1>
      <ul>
        <li
          draggable
          v-for="(item, index) in nodeList"
          @dragstart="handleDragstart"
          @dragend="handleDragEnd($event, item)"
          :key="'node' + index"
          class="source"
        >
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </span>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <child45 :treeListData="treeData"   :ruleForm="ruleForm"></child45>
        <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
    </el-form>
        <pre>
              {{ ruleForm }}
        </pre>
      
 
    </div>
  </div>
</template>

<script>
import { guid } from "@/utils/common";
import draggable from 'vuedraggable'
import child45 from './child45'
export default {
  data() {
    return {
      nodeList: [
        {
          label: "nodetype1"
        },
        {
          label: "nodetype2"
        }
      ],
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
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
      
      treeData: [
 
        {
 
          label: '一级02',
          value: '1',
          name:"name",
          children: [
            {
 
              label: '二级01',
              value: '1-1',
              name:"desc",
              children: []
            },
            // {
            //   isOpen: false,
            //   label: '二级02',
            //   value: '2-1',
            //   children: [
            //     {
            //       isOpen: false,
            //       label: '三级',
            //       value: '1-1-1',
            //       children: []
            //     }
            //   ]
            // }
          ]
        }
      ]
    };
  },
  components: {
    child45,draggable
  },
  methods: {
    init() {},
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    updata(data){
        
        this.treeData=data
    },
    handleDragstart(e) {
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
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
.myDrageContainer {
  display: flex;
  height: calc(100vh - 120px);
  & > span {
    width: 200px;
    // display: block;
    background-color: #f7f4f4;
    padding: 10px;
    height: 100%;
    & > ul {
      margin-left: 10px;
    }
  }
  & > div {
    flex: 2;
    height: 100%;
  }
}
</style>
