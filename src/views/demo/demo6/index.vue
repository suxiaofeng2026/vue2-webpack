<template>
  <div style="height:90vh">

    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
       @customEmit="customEmit"
    >
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch" />
        <el-button size="small" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button>
        <!-- <crud-toolbar :search.sync="crud.searchOptions.show"
                      :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns"
                      @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/> -->
      </div>
      <template slot="body" >
        <div>我是插槽body的内容</div>
        <card-list   :dataList="crud.list"></card-list>
        <!-- <div class="infoContainer">
    <el-row :gutter="10">
      <el-col :span="8" v-for="(item, index) in crud.list" :key="'htr' + index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item[Object.entries(item)[0][0]] }}</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="openEdit(index,item)"
              >调用事件</el-button
            >
          </div>
          <div
            v-for="(value, key, subIndex) in item"
            :key="index + '-' + subIndex"
            class="text item"
          >
            {{ value }}

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div> -->
      </template>
    </d2-crud-x>
  </div>
</template>

<script>
import { AddObj, GetList, UpdateObj, DelObj } from '@/api'
import cardList from './components/cardList'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  name: 'formText',
  mixins: [d2CrudPlus.crud],
  components: { cardList },
  data () {
    return {
      show: true
    }
  },
  methods: {
    openEdit (index, row) {
      this.$refs.d2Crud.handleEdit(index, row)
    },
    customEmit (data) {
      console.log(data)
    },
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      return GetList(query)
    },
    addRequest (row) {
      return AddObj(row)
    },
    updateRequest (row) {
      return UpdateObj(row)
    },
    delRequest (row) {
      console.log(row)
      return DelObj(row.id)
    }
  }
}
</script>
