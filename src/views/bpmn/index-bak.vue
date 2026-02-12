<template>
  <el-card shadow="never" style="margin-top: 20px">
    <h1 class="lmtitle2">
      流程图
      <span style="float: right; margin-top: -8px">
        <el-button type="primary" size="small" @click="setPosition"
          >设置节点坐标</el-button
        >

        <el-button type="primary" size="small" @click="creatElement"
          >创建节点元素</el-button
        >
        <el-button type="primary" size="small" @click="handleUndo"
          >后退</el-button
        >
        <el-button type="primary" size="small" @click="handleRedo"
          >前进</el-button
        >

        <el-button type="primary" size="small" @click="handleToXml"
          >获取XML</el-button
        >
        <el-button type="primary" size="small" @click="handleToSVG"
          >获取handleToSVG</el-button
        >
        <el-button type="primary" size="small" @click="handleToJPG"
          >获取handleToJPG</el-button
        >
        <el-button type="primary" size="small" @click="handleToBpmn"
          >保存bpmn</el-button
        >
        <el-button type="primary" size="small" @click="setExtend"
          >设置扩展数据</el-button
        >
        <el-button type="primary" size="small" @click="resetNodeId"
          >重置节点ID</el-button
        >
        <el-button type="primary" size="small" @click="setLableName({id:'Activity_1gkza3j',name:'我是设置名称'})"
          >重置节点名称</el-button
        >
        <el-button type="primary" size="small" @click="setDoc('Activity_1gkza3j')"
          >挂载数据</el-button
        >
        <el-button type="primary" size="small" @click="setDocImg('Activity_1gkza3j')"
          >挂载图片</el-button
        >
        <el-button type="primary" size="small" draggable="true" @dragstart="handleDragstart($event,'task')" 
          >拖拽任务</el-button
        >{{ currentType }}
      </span>
    </h1>
    <div class="bpmnContainers">
      <div class="canvas" ref="canvas"></div>
    </div>
    <svg id="mysvgcontainer" style="display: none"></svg>
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import CustomPalette from '@/components/custom/CustomPalette'
import bpmnXmlStr from './xml'
import { guid } from '@/libs/utils'
// 自定义

import CustomModeler from './customModeler'

const bpmnModeler = ref<any>()
const myPanel = ref()
const bpmnId = ref<string>('11cfd36450894bae8e0b693c3a1fd934')
const dataTimestamp = ref<string>('')
const canvas = ref<any>()
 

const handleDragstart=(e:any,data:any)=>{
    console.log("++++++++++++++++")
    console.log(e)
    const bpmnFactory = bpmnModeler.value.get('bpmnFactory')
    const elementFactory = bpmnModeler.value.get('elementFactory')
    const create=bpmnModeler.value.get("create")
    const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
    const shape = elementFactory.createShape({
              // 创建这个元素的类型 我先虽随便写了
              type: 'bpmn:event1',
              businessObject
            })
            // console.log(shape,"--------------") // 只在拖动或者点击时触发
            // shape.id=(new Date().getTime())+""
    create.start(event, shape)

}
const setLableName = (data: any) => {
  const elementRegistry = bpmnModeler.value.get('elementRegistry')
  const element = elementRegistry.get(data.id)
  const modeling = bpmnModeler.value.get('modeling')
  modeling.updateLabel(element, data?.name)
}
const resetNodeId=()=>{
     const element = getBpmnByid('Activity_1gkza3j')
     const elementRegistry = bpmnModeler.value.get('elementRegistry')
     element.businessObject.id = "Activity_1gkza3j_AAAAAAAAA"
      elementRegistry.updateId(element, "Activity_1gkza3j_AAAAAA")

}
const getBpmnByid = (nodeId: string) => {
  const elementRegistry = bpmnModeler.value.get('elementRegistry')
  var shape = elementRegistry.get(nodeId)
  return shape
}
// 设置提交的数据
const setbpmnNodeProp = (data: any) => {
  // 获取所有element
  const elementRegistry = bpmnModeler.value.get('elementRegistry')

  // 通过id获取元素
  const element = elementRegistry.get(data.id)
  setLableName(data)
}
const createNewDiagram = async () => {
  let bpmxl = bpmnXmlStr
  // if (bpmnId.value) {
  //     const result = await api.bpmn.findByPid(bpmnId.value)
  //     console.log(result)
  //     bpmxl = JSON.parse(result?.data?.content)
  //     dataTimestamp.value = result?.data?.dataTimestamp
  // }
  try {
    await bpmnModeler.value?.importXML(bpmxl)
    // const { warnings } = result;
    // console.log(result);
  } catch (err: any) {
    console.log(err.message, err.warnings)
  }
}
const getFileName = (xml: any) => {
  let split = xml.split('process id="')
  return split[1].split('" ')[0] + '.bpmn20.xml'
}

const setPosition=()=>{
    const element = getBpmnByid('Activity_06px75c')
    const modeling = bpmnModeler.value.get('modeling')
    const elementRegistry = bpmnModeler.value.get('elementRegistry')
 
  
  console.log(element,"+++==")

  // 更新到节点
  setTimeout(() => {
    modeling.resizeShape(element, {x: 200, y: 400, width:element.height , height:element.height})
  }, 100)
}

const handleToJPG = async () => {
  try {
    const result = await bpmnModeler.value.saveSVG()
    const { svg } = result

    console.log(svg)
    const mysvg = svg
    // const mysvg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="760" height="592" viewBox="361 71 760 592" version="1.1"><defs><marker id="sequenceflow-end-white-black-e5i9fbsxjdwrva561d56seaij" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_222222257ed7b3d-8575-45f6-bc9a-8f6a77df672a" style="display: block;"><g class="djs-visual"><path d="m  390,383L390,570 L575,570 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-e5i9fbsxjdwrva561d56seaij');"/></g><polyline points="390,383 390,570 575,570 " class="djs-hit djs-hit-stroke" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="384" y="377" width="197" height="199" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_2222222801f7ff4-ea8b-4e90-a39b-b5d405d7a7d4" style="display: block;"><g class="djs-visual"><path d="m  413,360L464,360 L464,340 L515,340 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-e5i9fbsxjdwrva561d56seaij');"/></g><polyline points="413,360 464,360 464,340 515,340 " class="djs-hit djs-hit-stroke" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="407" y="334" width="114" height="32" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_22222226d289e99-d17f-4f62-8985-af9cade1c3c8" style="display: block;"><g class="djs-visual"><path d="m  600,363L600,390 L700,390 L700,417 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-e5i9fbsxjdwrva561d56seaij');"/></g><polyline points="600,363 600,390 700,390 700,417 " class="djs-hit djs-hit-stroke" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="594" y="357" width="112" height="66" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Gateway_075xbg4" style="display: block;" transform="matrix(1 0 0 1 367 337)"><g class="djs-visual"><rect width="80" height="120" rx="2" ry="2" style="stroke: rgb(204, 0, 0); stroke-width: 2px; fill: rgb(255, 255, 255);"/><text x="5" y="20" style="font-size: 12px; fill: rgb(47, 64, 86);">AAAAA0</text><text x="5" y="40" style="font-size: 12px; fill: rgb(47, 64, 86);">AAAAA1</text><text x="5" y="60" style="font-size: 12px; fill: rgb(47, 64, 86);">AAAAA2</text></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="80" height="120" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="92" height="132" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1g5u94q" style="display: block;" transform="matrix(1 0 0 1 515 317)"><g class="djs-visual"><image x="0" y="0" width="170" height="46" href="./images/event/5.svg"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="170" height="46" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="182" height="58" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_06px75c" style="display: block;" transform="matrix(1 0 0 1 615 417)"><g class="djs-visual"><image x="0" y="0" width="170" height="46" href="./images/event/8.svg"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="170" height="46" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="182" height="58" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0iq3mny" style="display: block;" transform="matrix(1 0 0 1 575 537)"><g class="djs-visual"><rect width="80" height="120" rx="2" ry="2" style="stroke: rgb(204, 0, 0); stroke-width: 2px; fill: rgb(255, 255, 255);"/><text x="5" y="20" style="font-size: 12px; fill: rgb(47, 64, 86);">AAAAA0</text><text x="5" y="40" style="font-size: 12px; fill: rgb(47, 64, 86);">AAAAA1</text><text x="5" y="60" style="font-size: 12px; fill: rgb(47, 64, 86);">AAAAA2</text></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="80" height="120" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="92" height="132" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1r5hb9q" style="display: block;" transform="matrix(1 0 0 1 595 87)"><g class="djs-visual"><image x="0" y="0" width="170" height="46" href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTY5LjEgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2OS4xIDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0RGRTRFQTt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiM4MzkwQUM7fQ0KCS5zdDN7ZmlsbDojODM5MEFDO30NCjwvc3R5bGU+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1Ni4zLDQ0LjUgMzIuNCw0NC4zIDMyLjQsMC41IDE1Ni43LDAuNSAxNjguNSwyMi41ICIvPg0KPGcgaWQ9IuW8gOWniyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMjggLTYwNC41KSI+DQoJPHBhdGggaWQ9Iui3r+W+hF83IiBjbGFzcz0ic3QxIiBkPSJNMTEyOC41LDYyNi43djAuNGwxMS43LDIxLjdoMjIuOFY2MDVoLTIyLjhMMTEyOC41LDYyNi43eiIvPg0KCTxwYXRoIGlkPSLot6/lvoRfOCIgY2xhc3M9InN0MiIgZD0iTTEyODQuNyw2MDVoLTE0NC41bC0xMS43LDIxLjh2MC41bDExLjcsMjEuOGgxNDQuNWwxMS44LTIyTDEyODQuNyw2MDV6Ii8+DQoJPHBhdGggaWQ9Iui3r+W+hF8xMiIgY2xhc3M9InN0MyIgZD0iTTExNTMuNiw2MjdsLTkuMi01Ljh2MTEuNUwxMTUzLjYsNjI3eiIvPg0KPC9nPg0KPC9zdmc+DQo="/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="170" height="46" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="182" height="58" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Gateway_1tjqxbq" style="display: block;" transform="matrix(1 0 0 1 967 217)"><g class="djs-visual"><image x="0" y="0" width="46" height="46" href="./images/event/3.svg"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="46" height="46" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="58" height="58" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1gkza3j" style="display: block;" transform="matrix(1 0 0 1 945 77)"><g class="djs-visual"><image x="0" y="0" width="170" height="46" href="./images/event/5.svg"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="170" height="46" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="182" height="58" class="djs-outline" style="fill: none;"/></g></g></svg>`
    var container = document.getElementById('mysvgcontainer')
    container.innerHTML = mysvg

    // container.style.width =1000;
    // container.style.height =1000;

    setTimeout(() => {
      console.log(container.querySelector('svg'), '+++======')
      saveSvgAsPng(container.querySelector('svg'), 'diagram.png')
    }, 2000)

    // var svgBlob = new Blob([svg], {
    //   type: 'image/svg+xml',
    // })

    // console.log(svgBlob,"-----")
    // let pngBase64Fun = svgBase64ToPngBase64(svgBlob);
    // 	pngBase64Fun.then((res) => {
    // 		console.log(res)

    // //         var downloadLink = document.createElement('a')
    // // downloadLink.download = '222.png'
    // // downloadLink.innerHTML = 'Get BPMN png'
    // // downloadLink.href = window.URL.createObjectURL(res)
    // // downloadLink.onclick = function (event) {
    // //   document.body.removeChild(event.target)
    // // }
    // // downloadLink.style.visibility = 'hidden'
    // // document.body.appendChild(downloadLink)
    // // downloadLink.click()

    // 	})
  } catch (err) {
    console.log(err)
  }
}

const handleToXml = async () => {
  bpmnModeler.value.saveXML(function (err: any, xml: any) {
    if (err) {
      console.log("xml error",err)
    } else {
      console.log('xml:')
      console.log(xml)
      if (xml) {
        const name = getFileName(xml)
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
}

const handleToBpmn = async () => {
  bpmnModeler.value.saveXML(async (err: any, xml: any) => {
    if (err) {
      console.log(err)
    } else {
      console.log(xml)
      // if (xml) {
      //     let formData: any = {
      //         content: JSON.stringify(xml)
      //     }
      //     if (bpmnId.value) {
      //         formData.id = bpmnId.value
      //         formData.dataTimestamp = dataTimestamp.value
      //     }
      //     // const result = await api.bpmn.saveOrUpdate(formData)
      //     // console.log(result)
      // }
    }
  })
}
const handleToSVG = async (): Promise<void> => {
  try {
    const result = await bpmnModeler.value.saveSVG()
    const { svg } = result

    var svgBlob = new Blob([svg], {
      type: 'image/svg+xml',
    })

    var downloadLink = document.createElement('a')
    downloadLink.download = 'ops-coffee-bpmn.svg'
    downloadLink.innerHTML = 'Get BPMN SVG'
    downloadLink.href = window.URL.createObjectURL(svgBlob)
    downloadLink.onclick = function (event) {
      document.body.removeChild(event.target)
    }
    downloadLink.style.visibility = 'hidden'
    document.body.appendChild(downloadLink)
    downloadLink.click()
  } catch (err) {
    console.log(err)
  }
}

const createModdleElement = (elementType, properties, parent) => {
  const moddle = bpmnModeler.value.get('moddle')
  const element = moddle.create(elementType, properties)
  parent && (element.$parent = parent)
  return element
}

const setExtend = () => {
  const element = getBpmnByid('Activity_1gkza3j')
  const modeling = bpmnModeler.value.get('modeling')
  const businessObject = element.businessObject
 
  console.log(element)
  console.log(businessObject)

  let extensionElements = businessObject.get('extensionElements')
  console.log(extensionElements,"======______")
  if (!extensionElements) {
    const aaa=createModdleElement(
      'bpmn:ExtensionElements',
      {  "bpmn:dataId":"666666",name:"333222" },
      businessObject
    )
    const bbb=createModdleElement(
      'bpmn:ExtensionElements',
      {  "bpmn:dataId":"666666",name:"1236544" },
      businessObject
    )

    extensionElements = createModdleElement(
      'bpmn:ExtensionElements',
    //   { values: [aaa,bbb] },
      {  "bpmn:dataId":"666666",name:"1236544" },
      businessObject
    )
    console.log(extensionElements,"====extensionElements")
    modeling.updateModdleProperties(element, businessObject, { extensionElements})
  }
}
const addEventListen = (): void => {
  const eventBus = bpmnModeler.value.get('eventBus')
  // 这里我是用了一个forEach给modeler上添加要绑定的事件
  const events = [
  
    // "element.click",
    'shape.added',
    'shape.move.end',
    'shape.removed',
    'connect.end',
    'connect.move',
    'connection.added',
  ]
  events.forEach(function (event) {
    eventBus.on(event, (e) => {
 
      console.log(event)
 
 
 
      console.log(e, '--++--=======')
      var elementRegistry = bpmnModeler.value.get('elementRegistry')
      var shape = e.element ? elementRegistry.get(e.element.id) : e.shape

      // 创建节点的时候 给节点挂载data 节点属性为自定的属性名称
      if (event === 'shape.added') {
        const businessObject = shape.businessObject
        let extensionElements = businessObject.get('extensionElements')
        console.log('======', extensionElements)
        ///////扩展属性
        // const modeling = bpmnModeler.value.get('modeling')
        // modeling.updateModdleProperties(shape, businessObject,{'activiti:dueDate':'PT2H' })

        // businessObject.set( 'extension:myCustomProperty' ,"123456" );
        //////扩展属性结束
        // 在页面加载的时候 如果带有document属性，则取消设置 document属性 新建节点则添加docment 属性
        if (!shape.businessObject.documentation) {
          console.log('设置type')
          //   console.log(e,"---")
          //必须修改businessObject中id,否则修改不生效
            // shape.businessObject.id = "Activity_0ubrmr0_aa407bffed5c40db8747a404cf4b5b46_20240328194938"
            // elementRegistry.updateId(shape, "Activity_0ubrmr0_aa407bffed5c40db8747a404cf4b5b46_20240328194938")
        //   setBpmnData(shape, { type: shape.type })
        } else {
          console.log('载入xml的文件节点')
        }
        ////////
        // 存放处理命令，最后使用commandStack执行
      }
      if (event === 'connection.added') {
        // 在页面加载的时候 如果带有document属性，则取消设置 document属性 新建节点则添加docment 属性

        console.log('设置 connect', shape)
        //   console.log(e,"---")
        //必须修改businessObject中id,否则修改不生效
        // const id = 'Flow_2222222' + guid()
        // shape.businessObject.id = id
        // elementRegistry.updateId(shape, id)
      }
    })
  })
}

//设置节点属性documentation
const setBpmnData = (element: any, data: any) => {
  const modeling = bpmnModeler.value.get('modeling')
  const bpmnFactory = bpmnModeler.value.get('bpmnFactory')

  const DOC = bpmnFactory.create('bpmn:Documentation', data)
//   const DOC = bpmnFactory.create('bpmn:Documentation', {...data,myStatus:"AAAACCCC"})
  // 更新到节点
  setTimeout(() => {
    modeling.updateProperties(element, {
      documentation: [DOC],
      //   extensionElements:[aaa]
    })
  }, 100)
}
const updateId = (id: string) => {
  const elementRegistry = bpmnModeler.value.get('elementRegistry')
  const element = elementRegistry.get('Activity_1gkza3j')
  //   const modeling = bpmnModeler.value.get('modeling')
  elementRegistry.updateId(element, 'Activity_11111111111111')

  //   ElementRegistry.updateId(element, newId)
  //   this.element.businessObject.id = id //必须修改businessObject中id,否则修改不生效
  //   const element = getBpmnByid('Activity_1gkza3j')
  //   var elementRegistry = bpmnModeler.value.get('elementRegistry')
  //   elementRegistry.updateId(element, "3333AA33333333333333")
}
const addClickListen = () => {
  bpmnModeler.value.on('element.dblclick', (e:any) => {
    console.log(e, '=====-------=========')
    // console.log(e.element.businessObject.documentation)
    let nodeType = e.element.type
    if (nodeType === 'bpmn:Task' || nodeType === 'bpmn:ExclusiveGateway') {
      e.element.businessObject.documentation.map((item: any) => {
        nodeType = item.$attrs.type
      })
    }
    // myPanel.value.openDrawer({ nodeType: nodeType, id: e.element.id, name: '', ...e.element.businessObject, })
  })
}

//创建节点元素
const creatElement = (x=200,y=200) => {
  const elementFactory = bpmnModeler.value.get('elementFactory')
  const modeling = bpmnModeler.value.get('modeling')
  const elementRegistry = bpmnModeler.value.get('elementRegistry')
  const ProcessElement = elementRegistry.find(
    (el: any) => el.type === 'bpmn:Process'
  )

  const myNode = elementFactory.createShape({
    // type: 'bpmn:Task',
    type:'bpmn:TextAnnotation',
    x: x,
    y: y,
  })

  //挂载到画布上 并返回节点
  const shape = modeling.createShape(myNode, { x: x, y: y }, ProcessElement)

  // 设置节点document属性
  setBpmnData(shape, { type: 'bpmn:event21' })

  console.log('creatElement')
  const targetNode = getBpmnByid('Activity_1gkza3j')
  //   document.getElementById('Activity_1gkza3j')
  let aaa = document.querySelector(
    'g[data-element-id=Activity_1gkza3j] text '
  ) as any
  aaa.style.fill = 'red'
  // 连接开始节点和用户任务节点
  nodeConnect(myNode, targetNode)
}
//
const setDoc=(nodeId:string)=>{
    const element = getBpmnByid(nodeId)
    const modeling = bpmnModeler.value.get('modeling')
  const bpmnFactory = bpmnModeler.value.get('bpmnFactory')
  const documentation = element.businessObject.documentation
  console.log(documentation,"documentation-------")
  let currentType={}
  documentation.map((item:any)=>{
    console.log(item.$attrs)
    currentType=item.$attrs
  })
  const DOC = bpmnFactory.create('bpmn:Documentation', {...currentType,currentStatus:"123"})
//   const DOC = bpmnFactory.create('bpmn:Documentation', {...data,myStatus:"AAAACCCC"})
  // 更新到节点
  setTimeout(() => {
    modeling.updateProperties(element, {
      documentation: [DOC],
    //   documentation: DOC,
      //   extensionElements:[aaa]
    })
  }, 100)
}

const setDocImg=(nodeId:string)=>{
    const element = getBpmnByid(nodeId)
    const modeling = bpmnModeler.value.get('modeling')
  const bpmnFactory = bpmnModeler.value.get('bpmnFactory')
  const documentation = element.businessObject.documentation
 
  let currentType={}
  documentation.map((item:any)=>{
    console.log(item.$attrs)
    currentType=item.$attrs
  })
  const DOC = bpmnFactory.create('bpmn:Documentation', {...currentType, imgUrl:"https://gips0.baidu.com/it/u=2715557971,1924949551&fm=3074&app=3074&f=PNG?w=2048&h=2048"})
//   const DOC = bpmnFactory.create('bpmn:Documentation', {...data,myStatus:"AAAACCCC"})
  // 更新到节点
  setTimeout(() => {
    modeling.updateProperties(element, {
      documentation: [DOC],
    //   documentation: DOC,
      //   extensionElements:[aaa]
    })
  }, 100)
}
// 连接节点
const nodeConnect = (sourceNode: any, targetNode: any) => {
  const modeling = bpmnModeler.value.get('modeling')
  modeling.connect(sourceNode, targetNode)
}
// 后退
const handleUndo = () => {
  bpmnModeler.value.get('commandStack').undo()
}
// 前进
const handleRedo = () => {
  bpmnModeler.value.get('commandStack').redo()
}

onMounted(() => {
    console.log(CustomPalette)
  bpmnModeler.value = new CustomModeler({
    container: canvas.value,
    additionalModules: [
      {
        __init__: ['labelEditingProvider'],
        labelEditingProvider: ['value', null], // 禁用文本编辑
      },
    ],
    moddleExtensions: {
      activiti: { dataId: '223', timestamp: '111' },
    },
  })

  createNewDiagram()

  addEventListen()
  addClickListen()
  //   setTimeout(() => {
  //     console.log("ddd")
  //      updateId("333")
  //   }, 1000);
})
</script>

<style lang="less">
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
  }

  // .panel {
  //     position: absolute;
  //     right: 0;
  //     top: 0;
  //     width: 400px;
  //     height: 100vh - 120px;
  // }
}
</style>
