<template>
    <div>
          <button v-on:[eventName1]="handleClick">Click me</button>

          <button v-on="eventHandlers">{{ buttonText }}</button>

<pre>
.stop：阻止事件传播
.prevent：阻止默认行为
.capture：在捕获阶段触发事件
.self：仅在事件目标是该元素自身时触发
.once：事件只触发一次
</pre>

    </div>

</template>
 
<script>
export default {
  data() {
    return {
      // 动态确定的事件名称
      eventName1: 'click', //dblclick 、click、contextmenu
      eventName: 'click',
      methodName: 'handleClick',
      buttonText: 'Click me',
      eventHandlers: {
        click: this.handleClick,
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      },
    };
  },
  methods: {
    handleClick(e) {
        console.log(e)
    //    e.preventDefault();
       e.stopPropagation()
      // 事件处理逻辑
      console.log("激活事件")
    //   alert('Button clicked!');
    },
    handleMouseEnter(e) {
        console.log("enter")
    
    },
    handleMouseLeave(e) {
        console.log("leave")
 
    }
  }
};
</script>
