const formdt = {
  title: '创建时间',
  key: 'created_at',
  width: 160,
  // sortable: true,
  type: 'datetime', // 字段类型为时间选择器datepicker,根据类型可自动生成默认配置
  form: { // form 表单的配置
    disabled: false, // 禁止添加输入与修改输入【可选】默认false
    value: dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}
export default formdt
