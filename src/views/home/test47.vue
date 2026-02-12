<script>
// 插槽
export default {
  render (createElement) {
    var component = {
      template: `<div>
        <slot></slot>
        <slot name="foo"></slot>
      </div>`
    }
    const childrenEl = createElement('span', { slot: 'foo' }, '123')
    return createElement(component, {
      scopedSlots: {
        default: props => createElement('span', '456'),
        foo: props => createElement('span', '789')      },
    }, [childrenEl])
  }
}
 
</script>
 