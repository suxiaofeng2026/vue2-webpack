export const crudOptions = (vm) => {
  return {
    // rowHandle: false,

    rowHandle: {
      // 行操作栏，与d2-crud一致，默认配置有修改与删除
      width: 240, // 操作列宽度
      title: '操作', // 操作列名
      view: { show: false }, // 查看按钮，配置请参考上方searchOptions.buttons
      edit: { show: true }, // 编辑按钮,配置同上
      remove: { confirmText: '确认人删除' },
      // remove: { show: false }, // 删除按钮,配置同上
      custom: [// 自定义按钮
        {
          text: '重置密码', // 按钮文字
          // 配置同上
          // 点击事件,需要在<d2-crud-x @customEmit="yourHandle"/>
          emit: 'resetPasswords'
        }
      ]
      // lineEdit: { show: true }

    },
    formOptions: {

    },

    options: {
      // hide: true, // 说明: 是否隐藏表格，通过body插槽自定义table
      height: '100%'
      // lineEdit: {
      //   validation: true // 行编辑是否启用，性能会有点影响
      // }
    },

    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 90,
        form: {
          disabled: true
        }
      },
      {
        title: '用户名',
        key: 'admin',

        // sortable: true,
        search: { disabled: true },
        type: 'text',
        // type: 'text-area',
        form: {
          component: {
            disabled (context) {
              return context.mode === 'edit'
            }
          },
          rules: [
            { required: true, message: '请输入用户名' }
          ],
          order: 1
        },
        order: 1
      // renderHeader: (h, { column, $index }) => {
      //   console.log(column)
      //   return h('div', { style: { width: '100px', height: '40px', background: '#ccc' } }, column.label + '地方')
      // }
      },
      {
        title: '姓名',
        key: 'registername',

        // sortable: true,
        search: { disabled: true },
        type: 'text',
        // type: 'text-area',
        form: {
          rules: [
            { required: true, message: '请输入姓名' }
          ],
          order: 1
        },
        order: 1
      },
      {
        title: '密码',
        key: 'passwords',
        show: false,
        search: { disabled: true },
        type: 'text',
        form: {
          rules: [
            { required: true, message: '请输入密码' }
          ],
          order: 1,
          // value: 'ss',
          component: {
            show (context) {
              // console.log(context);
              return context.mode === 'add'
            }
          }
        },
        order: 1,
        valueChangeImmediate: false // 是否在打开对话框后触发一次valueChange事件
      },
      {
        title: '邮箱',
        key: 'email',
        type: 'text',
        search: { show: true },
        sortable: true,
        form: { order: 10,
          rules: [
            { required: true, message: '请输入邮箱' }
          ]
        // component: { span: 24 }
        }// 该字段占据多宽，24为占满一行

      },
      {
        title: '登录次数',
        key: 'loadnumber',
        form: {
          disabled: true
        }
      },
      {
        title: '最后登录时间',
        key: 'loadtime',
        form: {
          disabled: true
        }
      }

    ],
    // pagination: false // 隐藏分页控件
    pagination: {
      layout: 'sizes, prev, pager, next, jumper, ->, total'
    }
  }
}
