<template>
  <div>
    <div class="dashboardListContainer">
      <h1>
        <span><i class="el-icon-s-data"></i> 总量统计</span>
      </h1>
      <div class="dashboardDataList">
       <ul>
         <li>
           <h1>场景数</h1>
           <span>8 <span>个</span></span>
         </li>
         <li>
           <h1>任务数</h1>
           <span>80 <span>个</span></span>
         </li>
         <li>
           <h1>语料数</h1>
           <span>30000 <span>个</span></span>
         </li>
         <li>
           <h1>总训练任务数</h1>
           <span>200 <span>个</span></span>
         </li>
         <li>
           <h1>完成任务百分比</h1>
           <span style="color:red">97%</span>
         </li>
         <li>
           <h1>任务类型数</h1>
           <span>34 <span>个</span></span>
         </li>
       </ul>
       <span class="clearFloat"></span>
      </div>
    </div>
    <div class="dashboardListContainer">
     <h1>
        <span><i class="el-icon-document"></i> 语料统计</span>
      </h1>
      <div class="chartsList">
        <div>
        <div><charts-container :option="option3"></charts-container></div>
        </div>

        <div class="childListContainer">
          <div><charts-container :option="option1"></charts-container></div>
         <div><charts-container :option="option2"></charts-container></div>
           <span class="clearFloat"></span>
        </div>

        <span class="clearFloat"></span>
      </div>
    </div>
    <div class="dashboardListContainer">
     <h1>
        <span><i class="el-icon-picture-outline"></i> 训练统计</span>
      </h1>
      <div class="chartsList">
        <div>
          <charts-container :option="option4"></charts-container>
        </div>
        <div>
           <charts-container :option="option5"></charts-container>
        </div>
        <span class="clearFloat"></span>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.dashboardListContainer{
  margin-top: 20px;
 border: 1px solid #f1f0f2;
 margin-bottom: 10px;
 &>h1{
   font-weight: normal;
   display: block;
   padding: 0;
   margin: 0;
   position: relative;
   &>span{
     display: inline-block;
     color: #fff;
     background-color: #409eff;
     padding:  0 10px 0 10px;
     font-size: 15px;
     position: absolute;
     top: -15px;
     left: 10px;
     line-height: 30px;
   }
 }
 &>div{
   margin-top: 15px;
   padding: 10px;
 }
}
.dashboardDataList{
&>ul{
  padding: 0px;
  margin: 0px;
  &>li{
    color: #6e7b8a;
    float: left;
    width: 16.6667%;
    display: block;
    text-align: center;
    line-height: 2;
    &>h1{
      font-size: 12px;
    }
    &>span{
      display: block;
      color: #000;
      font-size: 24px;
      &>span{
        font-size: 14px;
        color: #6e7b8a;
      }
    }
  }
}
}
.childListContainer{
  &>div{
    display:inlineblock;float:left;
  }
  &>div:first-child{width:33.333%;}
  &>div:nth-child(2){
    width:66.666%;
  }
}
@media screen and (min-width: 1400px) {
.chartsList{
  &>div{
    width:50%; display:inlineblock;float:left;
  }
}
}

</style>
<script>
import chartsContainer from '@/components/dashboard/charts_container'
import { optionList } from './option_data/option-config'
export default {
  data () {
    return {
      option1: optionList.option1,
      option2: optionList.option2,
      option3: optionList.option3,
      option4: optionList.option4,
      option5: optionList.option5
    }
  },
  components: {
    chartsContainer
  },
  mounted () {},
  methods: {

  }
}
</script>
