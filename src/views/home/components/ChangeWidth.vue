<template>
    <!-- 拖动右边距改变div宽度 -->
    <div :id="`width${moveId}`" class="x-handle" @mousedown="mouseDown"></div>
   </template>

<script>
export default {
  name: 'ChangeWidth',
  props: ['index', 'moveId'],
  data () {
    return {
      lastX: ''
    }
  },

  created () {
    document.addEventListener('mouseup', this.mouseUp)
  },

  destroyed () {
    document.removeEventListener('mouseup', this.mouseUp)
  },

  methods: {
    mouseDown (event) {
      document.addEventListener('mousemove', this.mouseMove)
      this.lastX = event.screenX
    },
    mouseMove (e) {
      this.$emit('widthChange', { width: e.screenX - this.lastX, index: this.index })
      this.lastX = e.screenX
    },
    mouseUp () {
      this.lastX = ''
      document.removeEventListener('mousemove', this.mouseMove)
      this.$emit('clearEvent')
    }
  }
}
</script>
   <style lang="less" scoped>
   .x-handle {
    width: 5px;
    cursor: e-resize;
    background: #2866f0;
    height: 30px;
    position: absolute;
    right: 0;
    top: 40%;
   }
   </style>
