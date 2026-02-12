<script>
export default {
  functional: true, // 函数式组件
  // 它只是一个接受一些 prop 的函数。在这样的场景下，我们可以将组件标记为 functional，这意味它无状态 (没有响应式数据)，也没有实例 (没有 this 上下文)。一个函数式组件就像这样：
  render: (h, context) => {
    let { props, parent } = context
    let { items, isOrdered } = props
    console.log(context)
    // console.log(items)
    let todos = [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
    let todoList = todos.map(item => {
      return <div vOn:click={() => { parent.parentClick() }}>{item.text}-{items}-{JSON.stringify(isOrdered)}</div>
    })
    return (<div>{todoList} {parent.message}</div>)
  }
}
</script>
