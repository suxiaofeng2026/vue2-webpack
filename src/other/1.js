export const crudOptions = {
  columns: [
    {
      form: {
        title: '表单字段显示的名称', // 默认使用column的title
        rules: [ // 表单校验规则
          // 更多帮助请参考 https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze
          { required: true, message: '请选择地区' }
        ],
        component: { // 添加和修改时form表单的组件
          name: 'dict-select', // 表单组件名称，支持任何v-model组件
          value: null, // 组件默认值，你还可以通过覆盖doDialogOpened(context)方法，修改context.form.xx的值
          props: { // 表单组件的参数，具体参数请查看对应的组件文档
            // 如何查找组件配置，请参考
            // http://d2-crud-plus.docmirror.cn/d2-crud-plus/guide/component.html
            separator: ',', // dict-select的组件参数，[不同组件参数不同]
            elProps: { // dict-select内部封装了el-select
              filterable: true, // 可过滤选择项
              multiple: true, // 支持多选
              clearable: true // 可清除
            },
            dict: {} // 详细见dict配置。运行时，会将column.dict复制到此处，再由此处配置的dict覆盖
          },
          placeholder: '',
          disabled: false, // 是否在表单中禁用组件，可以配置为方法，动态禁用↓  ↓  ↓  ↓
          // disabled(context){return false}
          readonly: false, // 表单组件是否是只读，还可以配置为方法，动态只读↓  ↓  ↓  ↓
          // readonly(context){return false}
          show: true, // 是否显示该字段，还可以配置为方法，动态显隐↓  ↓  ↓  ↓
          // show(context){return false}
          on: { // 除input change事件外，更多组件事件监听
            select (event) { console.log(event) } // 监听表单组件的select事件
          },
          slots: { // 插槽渲染
            default: (h, scope) => { // 默认的scoped插槽
              return (<div>{scope.data}</div>)
            }
          },
          children: [ // 子元素
            (h) => { return (<div slot="prefix">非scoped插槽</div>) }
          ],
          span: 12 // 该字段占据多宽，24为占满一行
        },
        order: 10, // 排序号，默认为10，数字越小 越靠前
        // 注意：↓↓↓↓ 以下三个disabled，仅初始化时有效，不可动态启用，需要动态显隐字段请配置component.show
        disabled: false, // 完全关闭该字段在表单中显示
        addDisabled: false, // 是否仅在添加编辑框中关闭该字段
        editDisabled: false, // 是否仅在修改编辑框中关闭该字段
        /**
                 * @param value 当前选择的值
                 * @param form 当前表单
                 * @param getColumn 获取字段配置的方法，getColumn(keyName) 返回keyName的字段配置，可以动态修改组件配置
                 * @param mode 当前模式:【add、edit、search】
                 * @param component 当前组件的ref
                 * @param immediate 是否是对话框打开后立即触发的
                 * @param getComponent 获取组件Ref的方法， getComponent(keyName), 返回组件ref，可以动态调用该组件的方法
                      注意：当component未初始化或者没有显示时，是获取不到组件ref的
              **/
        valueChange (key, value, form, { getColumn, mode, component, immediate, getComponent }) {
          // form表单数据change事件，表单值有改动将触发此事件
        },
        valueChangeImmediate: false, // 是否在打开对话框后触发一次valueChange事件
        // 是否启用form编辑框的slot插槽,需要d2-crud-x才支持
        // 示例 http://preview.d2-crud-plus.docmirror.cn/D2CrudPlusExample/#/demo/form/slot
        slot: false,
        itemProps: {
          // el-form-item的配置
          //  https://element.eleme.cn/#/zh-CN/component/form#form-item-attributes
          labelWidth: '0px' // 可以隐藏表单项的label
        }
      }
    }
  ]
}
