export const crudOptions = (vm) => {
  return {
    // rowHandle: false,

    rowHandle: {
      // 行操作栏，与d2-crud一致，默认配置有修改与删除
      width: 300, // 操作列宽度
      title: '操作', // 操作列名
      view: {}, // 查看按钮，配置请参考上方searchOptions.buttons
      edit: { show: false }, // 编辑按钮,配置同上
      // remove: { show: false }, // 删除按钮,配置同上

      lineEdit: { show: true },
      custom: [// 自定义按钮
        {
          icon: 'el-icon-shopping-bag-1',
          text: '更多', // 按钮文字
          // 配置同上
          // 点击事件,需要在<d2-crud-x @customEmit="yourHandle"/>
          emit: 'customEmit'
        }
      ]

    },

    options: {
      // hide: true, // 说明: 是否隐藏表格，通过body插槽自定义table
      height: '100%',
      lineEdit: {
        validation: true // 行编辑是否启用，性能会有点影响
      }
    },

    columns: [ {
      title: '文本域',
      key: 'text-area',
      // sortable: true,
      search: { disabled: true },
      type: 'text-area',
      // type: 'text-area',
      form: { order: 2 },
      order: 1,
      renderHeader: (h, { column, $index }) => {
        console.log(column)
        return h('div', { style: { width: '100px', height: '40px', background: '#ccc' } }, column.label + '地方')
      }
    },
    {
      title: 'ID',
      key: 'id',
      width: 90,
      form: {
        disabled: true
      }
    },

    {
      title: '文本',
      key: 'text',
      type: 'text',
      search: { show: true },
      sortable: true,
      form: { order: 10,

        component: { span: 24 }
      }// 该字段占据多宽，24为占满一行

    }

    ],
    // pagination: false // 隐藏分页控件
    pagination: {
      layout: 'sizes, prev, pager, next, jumper, ->, total'
    }
  }
}
