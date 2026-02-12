<template>
   <div>
    <el-button type="primary" size="small" @click="handleToXml"
          >获取XML</el-button
        >
    <div class="bpmnContainers">
      <div class="canvas" ref="canvas"></div>
    </div>
   </div>
</template>

<script>
import bpmnXmlStr from './xml'

import CustomModeler from './customModeler'
export default {
  data () {
    return {
      bpmnModeler: null
    }
  },
  mounted () {
    this.init()
    this.createNewDiagram()

    this.addEventListen()
    this.addClickListen()
  },
  computed: {

  },
  methods: {
    init () {
      this.bpmnModeler = new CustomModeler({
        container: this.$refs.canvas,
        additionalModules: [
          {
            __init__: ['labelEditingProvider'],
            labelEditingProvider: ['value', null], // 禁用文本编辑
 	// 禁止拖动线
        bendpoints: ["value", ""],
// 禁用左侧面板
        paletteProvider: ["value", ""],
 // 禁用滚轮滚动
        zoomScroll: ["value", ""],
// 禁止点击节点出现contextPad
        contextPadProvider: ["value", ""],
          }
        ]
      })
    },
    getFileName (xml) {
      let split = xml.split('process id="')
      return split[1].split('" ')[0] + '.bpmn20.xml'
    },
    async handleToXml () {
      const that = this
      that.bpmnModeler.saveXML(function (err, xml) {
        if (err) {
          console.log('xml error', err)
        } else {
          console.log('xml:')
          console.log(xml)
          if (xml) {
            const name = that.getFileName(xml)
            // 把输就转换为URI，下载要用到的
            const encodedData = encodeURIComponent(xml)
            const downloadLink = document.createElement('a')

            // 将数据给到链接
            downloadLink.href =
          'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
            // 设置文件名
            downloadLink.download = name
            // 触发点击事件开始下载
            downloadLink.click()
          }
        }
      })
    },
    async createNewDiagram  () {
      let bpmxl = bpmnXmlStr
      // if (bpmnId.value) {
      //     const result = await api.bpmn.findByPid(bpmnId.value)
      //     console.log(result)
      //     bpmxl = JSON.parse(result?.data?.content)
      //     dataTimestamp.value = result?.data?.dataTimestamp
      // }
      try {
        await this.bpmnModeler?.importXML(bpmxl)
        // const { warnings } = result;
        // console.log(result);
      } catch (err) {
        console.log(err.message, err.warnings)
      }
    },
    setLableName (data) {
      const elementRegistry = this.bpmnModeler.get('elementRegistry')
      const element = elementRegistry.get(data.id)
      const modeling = this.bpmnModeler.get('modeling')
      modeling.updateLabel(element, data?.name)
    },
    setBpmnData  (element, data) {
      const modeling = this.bpmnModeler.get('modeling')
      const bpmnFactory = this.bpmnModeler.get('bpmnFactory')

      const DOC = bpmnFactory.create('bpmn:Documentation', data)
      // 更新到节点
      modeling.updateProperties(element, {
        documentation: [DOC]
      })
    },
    addEventListen  () {
      const that = this
      const eventBus = that.bpmnModeler.get('eventBus')
      // 这里我是用了一个forEach给modeler上添加要绑定的事件
      const events = [

        // "element.click",
        'shape.added'
        // 'shape.move.end',
        // 'shape.removed',
        // 'connect.end',
        // 'connect.move',
        // 'connection.added'
      ]
      events.forEach((event) => {
        eventBus.on(event, (e) => {
        //   console.log(event)
        //   console.log(e, '--++--=======')
          var elementRegistry = that.bpmnModeler.get('elementRegistry')
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape

          // 创建节点的时候 给节点挂载data 节点属性为自定的属性名称
          if (event === 'shape.added') {
            console.log('新增节点')
            console.log(shape)
            if (!shape.businessObject.documentation) {
              setTimeout(() => {
                if (shape.businessObject.$type !== 'bpmn:StartEvent') {
                  this.setLableName({ id: e?.element?.id, name: '新节点水电费是的发电房' })
                }

                this.setBpmnData(shape, { type: shape.type, imgUrl: 'https://gips0.baidu.com/it/u=2715557971,1924949551&fm=3074&app=3074&f=PNG?w=2048&h=2048' })
              }, 200)
            } else {
              console.log('载入xml的文件节点')
            }
          }
        })
      })
    },
    addClickListen () {
      const that = this
      that.bpmnModeler.on('element.dblclick', (e) => {
        console.log(e, '=====-------=========')
        console.log(e.element.businessObject.documentation)
        // let nodeType = e.element.type
        // if (nodeType === 'bpmn:Task' || nodeType === 'bpmn:ExclusiveGateway') {
        //   e.element.businessObject.documentation.map((item) => {
        //     nodeType = item.$attrs.type
        //   })
        // }
      })
    }
  }
}
</script>
<style lang="less" >
.bpmnContainers {
  background-color: #ffffff;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 10px;

  .canvas {
    width: 100%;
    height: calc(100vh - 200px);
    border: 1px solid #eee;
    // .djs-visual{
    //     rect{
    //         stroke: #b4b4b4 !important;
    //         stroke-width: 1px !important;
    //     }
    // }
  }

}
</style>
