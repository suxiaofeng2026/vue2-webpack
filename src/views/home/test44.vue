<template>
  <div class="row">
    <button @click="addData()">添加</button>
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable :mytasks="list" />

      <br>
      ==============================================
      <br>
      <nested-draggable :mytasks="list2" />
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script>
import nestedDraggable from './infra/nested'
import rawDisplayer from './infra/raw-displayer'
export default {
  name: 'nested-example',
  display: 'Nested',
  order: 15,
  components: {
    nestedDraggable,
    rawDisplayer
  },
  data () {
    return {
      list: [
        {
          name: 'task 1',
          mytasks: [
            {
              name: 'task 2',
              mytasks: []
            }
          ]
        },
        {
          name: 'task 3',
          mytasks: [
            {
              name: 'task 4',
              mytasks: []
            }
          ]
        },
        {
          name: 'task 5',
          mytasks: []
        }
      ],
      list2: [
        {
          name: 'atask 1',
          mytasks: [
            {
              name: 'atask 2',
              mytasks: []
            }
          ]
        },
        {
          name: 'atask 3',
          mytasks: [
            {
              name: 'atask 4',
              mytasks: []
            }
          ]
        },
        {
          name: 'atask 5',
          mytasks: []
        }
      ]

    }
  },
  methods: {
    addData () {
      this.list.push({
        name: 'task 7',
        mytasks: []
      })
    }
  }
}
</script>
<style scoped></style>
