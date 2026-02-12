// =================================简单自定义渲染===========================================
/**
 * 自定义之后可以渲染自己想要的
 */
import { customElements, customConfig } from './customConfig.js' // 导入公共方法和配置
import { splitByString } from '@/utils/common.js'
// 创建Svg
import {
  append as svgAppend,
  create as svgCreate,
  attr as svgAttr
} from 'tiny-svg'

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer' // 引入默认的renderer
function drawRect (parentNode, width, height, borderRadius, strokeColor) {
  console.log('rect')
  const rect = svgCreate('rect')

  svgAttr(rect, {
    width: width,
    height: height,
    rx: borderRadius,
    ry: borderRadius,
    stroke: strokeColor || '#000',
    strokeWidth: 1,
    fill: '#fff',
    x: 5
    // fill: 'none',
  })

  svgAppend(parentNode, rect)

  return rect
}

// 例如，生成一个介于1到10之间的随机整数
//   var randomInt = getRandomInt(1, 10);

const HIGH_PRIORITY = 1500 // 最高优先级
export default class CustomRenderer extends BaseRenderer {
  // 继承BaseRenderer
  constructor (eventBus, bpmnRenderer) {
    super(eventBus, HIGH_PRIORITY)
    this.bpmnRenderer = bpmnRenderer
  }

  canRender (element) {
    // 忽略标签
    return !element.labelTarget
  }

  drawShape (parentNode, element) {
    // 核心函数就是绘制shape
    let type = element.type // 获取到类型
    let currentStatus = ''// 当前执行状态状态
    let imgUrl = ''
    let arrList = []
    if (element.businessObject.documentation) {
      element.businessObject.documentation.map((item) => {
        type = item.$attrs.type
        currentStatus = item.$attrs.currentStatus
        imgUrl = item.$attrs.imgUrl
      })
    }

    // if (element.businessObject.$type === 'bpmn:StartEvent') {
    //   var url = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTY5LjEgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2OS4xIDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0RGRTRFQTt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiM4MzkwQUM7fQ0KCS5zdDN7ZmlsbDojODM5MEFDO30NCjwvc3R5bGU+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1Ni4zLDQ0LjUgMzIuNCw0NC4zIDMyLjQsMC41IDE1Ni43LDAuNSAxNjguNSwyMi41ICIvPg0KPGcgaWQ9IuW8gOWniyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMjggLTYwNC41KSI+DQoJPHBhdGggaWQ9Iui3r+W+hF83IiBjbGFzcz0ic3QxIiBkPSJNMTEyOC41LDYyNi43djAuNGwxMS43LDIxLjdoMjIuOFY2MDVoLTIyLjhMMTEyOC41LDYyNi43eiIvPg0KCTxwYXRoIGlkPSLot6/lvoRfOCIgY2xhc3M9InN0MiIgZD0iTTEyODQuNyw2MDVoLTE0NC41bC0xMS43LDIxLjh2MC41bDExLjcsMjEuOGgxNDQuNWwxMS44LTIyTDEyODQuNyw2MDV6Ii8+DQoJPHBhdGggaWQ9Iui3r+W+hF8xMiIgY2xhc3M9InN0MyIgZD0iTTExNTMuNiw2MjdsLTkuMi01Ljh2MTEuNUwxMTUzLjYsNjI3eiIvPg0KPC9nPg0KPC9zdmc+DQo='
    //   var attr = { x: 0, y: 0, width: 80, height: 46 }
    //   const customIcon = svgCreate('image', {
    //     // 在这里创建了一个image
    //     ...attr,
    //     href: url
    //   })
    //   svgAppend(parentNode, customIcon)
    //   return customIcon
    // }

    // 通用节点 start

    if (customElements.includes(type)) {
      // =================
      const customIcon = drawRect(parentNode, 70, 70, 3, '#d8d8d8')
      if (imgUrl) {
        const currentImgUrl = svgCreate('image', {
          // 在这里创建了一个image
          ...{ x: 10, y: 5, width: 60, height: 60 },
          href: imgUrl
        })
        svgAppend(parentNode, currentImgUrl)
      }

      if (
        element.businessObject.name &&
        element.businessObject.$type === 'bpmn:Task'
      ) {
        const textString = element.businessObject.name
        arrList = splitByString(textString, 14)

        for (let i = 0; i < arrList.length; i++) {
          const text = svgCreate('text', {
            x: 40,
            y: 70 + 30 * (i + 1) / 2,
            'font-size': '12',
            fill: '#2f4056',
            'text-anchor': 'middle'
          })
          text.innerHTML = arrList[i]
          //   parentNode.title = element.businessObject.name
          svgAppend(parentNode, text)
        }
      }

      //   // 可以看到,实现让页面渲染出自己想要的效果的做法就是使用svgCreate方法创建一个image并添加到父节点中.
      element.width = 80 // 这里我是取了巧, 直接修改了元素的宽高 设定这个玩意的宽高
      element.height = 70 + arrList.length * 20
      return customIcon
    }
    // 通用节点 end
    const shape = this.bpmnRenderer.drawShape(parentNode, element)
    return shape
  }

  getShapePath (shape) {
    return this.bpmnRenderer.getShapePath(shape)
  }
}

CustomRenderer.$inject = ['eventBus', 'bpmnRenderer']
