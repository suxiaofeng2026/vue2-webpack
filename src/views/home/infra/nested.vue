<template>
  <draggable class="dragArea" tag="ul" :list="mytasks" :group="{ name: 'g1' }">
    <li v-for="el in mytasks" :key="el.name">
      <p>{{ el.name }}</p>
      <nested-draggable :mytasks="el.mytasks" />
    </li>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  props: {
    mytasks: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  name: "nested-draggable"
};
</script>
<style lang="less">
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
  margin-left: 10px;
}
</style>
