<template>
  <div>
           <div class="pieContainer">
     <ul><li><pie1/></li>

     </ul>

   </div>
   <el-select v-model="value" filterable placeholder="请选择" :filter-method="dataFilter">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label" 
      :value="item.value">
    </el-option>
  </el-select>
  </div>

</template>
<style lang="less">
.pieContainer{
  &>ul{
    display: block;
    &>li{
      padding: 8px;
      width: 33.33%;
      display: block;
      float: left;
    }
  }
}
.statistContainer{
  &>ul{
    display: block;
    &>li{
      padding: 8px;
      width: 50%;
      display: block;
      float: left;
    }
  }
}
</style>
<script>
import pie1 from './components/pie1'
import chart1 from './components/chart1'
import chart2 from './components/chart2'
import chart3 from './components/chart3'
import chart4 from './components/chart4'
export default {
  data () {
    return {
        options1:[],
        options: [{
            id: 1,
          value: '选项1',
          label: '黄金糕'
        }, {
            id: 2,
          value: '选项2',
          label: '双皮奶'
        }, {
            id: 3,
          value: '选项3',
          label: '蚵仔煎'
        }, {
            id: 4,
          value: '选项4',
          label: '龙须面'
        }, {
          id: 5,
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      
    }
  },
  components: {
    chart1, chart2, chart3, chart4, pie1
  },
  created () {
  },
  mounted () {
  },
  methods: {
    dataFilter(val) {
            
            if (val) {
                this.options = this.options.filter((item) => {
                    if (toString(item.id).includes(val) || item.label.includes(val)) {
                        return true
                    }
                })
            }
            else {
                this.bumen = this.bumen1 //val为空时，还原数组
            }

        },

    setNewOptions () {
    }
  }
}
</script>
