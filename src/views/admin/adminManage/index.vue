<template>
  <div style="height:88vh">

    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
        @resetPasswords="resetPasswords"
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
    </d2-crud-x>
  </div>
</template>

<script>

import { AddObj, GetList, UpdateObj, DelObj } from '@/api/admin'
// import * as api from '@/api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  name: 'formText',
  mixins: [d2CrudPlus.crud],

  data () {
    return {
      show: true
    }
  },
  methods: {
    resetPasswords ({ row }) {
      console.log(row)
    },
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
      return DelObj({ id: row.id })
    }
  }
}
</script>
