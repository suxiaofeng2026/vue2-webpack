export const tool = {
  data: function () {
    return {
      commonData: 'This is common data'
    }
  },

  methods: {
    handleDragstart (data) {
      const bpmnFactory = this.bpmnModeler.value.get('bpmnFactory')
      const elementFactory = this.bpmnModeler.value.get('elementFactory')
      const create = this.bpmnModeler.value.get('create')
      const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
      const shape = elementFactory.createShape({
        type: 'bpmn:event1',
        businessObject
      })

      create.start(event, shape)
    }
  }
}
