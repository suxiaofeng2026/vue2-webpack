export default function PaletteProvider (bpmnFactory, create, elementFactory, palette, translate, handTool, globalConnect, spaceTool, lassoTool) {
  this.bpmnFactory = bpmnFactory
  this.create = create
  this.elementFactory = elementFactory
  this.translate = translate
  this.handTool = handTool
  this.globalConnect = globalConnect
  this.spaceTool = spaceTool
  this.lassoTool = lassoTool

  palette.registerProvider(this)
}

PaletteProvider.$inject = [
  'bpmnFactory',
  'create',
  'elementFactory',
  'palette',
  'translate',
  'handTool',
  'globalConnect',
  'spaceTool',
  'lassoTool'
]

PaletteProvider.prototype.getPaletteEntries = function (element) { // 此方法和上面案例的一样
  const {
    bpmnFactory,
    create,
    elementFactory,
    translate,
    handTool,
    globalConnect,
    spaceTool,
    lassoTool

  } = this

  function createParticipant (event) {
    create.start(event, elementFactory.createParticipantShape())
  }
  // =========================================== 创建子流程
  function createSubProcess (event) {
    const shape = elementFactory.createShape({
      type: 'bpmn:SubProcess',
      isExpanded: false
    })

    create.start(event, shape)
  }

  function createCollapsedSubProcess (event) {
    const shape = elementFactory.createShape({
      type: 'bpmn:SubProcess',
      isExpanded: false
    })

    create.start(event, shape)
  }

  function createExpandedSubProcess (event) {
    const shape = elementFactory.createShape({
      type: 'bpmn:SubProcess',
      isExpanded: true
    })
    create.start(event, shape)
  }

  function createStart (event) {
    const shape = elementFactory.createShape({
      type: 'bpmn:StartEvent'

    })
    create.start(event, shape)
  }
  // =========================
  function createStartEvent () {
    return {

      event1: (event) => {
        // console.log("++_---------------_++")
        // console.log(event )
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:StartEvent') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event1',
          businessObject
        })
        // console.log(shape,"--------------") // 只在拖动或者点击时触发
        // shape.id=(new Date().getTime())+""
        create.start(event, shape)
      },
      event2: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event2',
          businessObject
        })

        create.start(event, shape)
      },
      event3: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:ExclusiveGateway') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event3',
          businessObject
        })

        create.start(event, shape)
      },
      event4: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event4',
          businessObject
        })

        console.log(JSON.stringify(shape), 'shape')
        shape.width = 170
        shape.height = 40
        create.start(event, shape)
      },
      event5: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event5',
          businessObject
        })

        create.start(event, shape)
      },
      event6: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event6',
          businessObject
        })

        create.start(event, shape)
      },
      event8: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event8',
          businessObject
        })

        create.start(event, shape)
      },
      event9: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event9',
          businessObject
        })

        create.start(event, shape)
      },
      event10: (event) => {
        // 还可以用来创建bpmn:StartEvent、bpmn:ServiceTask、bpmn:ExclusiveGateway等等...
        const businessObject = bpmnFactory.create('bpmn:Task') // 貌似是继承哪一个类型的能力
        const shape = elementFactory.createShape({
          // 创建这个元素的类型 我先虽随便写了
          type: 'bpmn:event10',
          businessObject
        })

        create.start(event, shape)
      }

    }
  }

  return {

    'hand-tool': {
      group: 'tools',
      className: 'icon-custom tool1',
      title: translate('手型工具'),
      action: {
        click: function (event) {
          handTool.activateHand(event)
        }
      }
    },
    'lasso-tool': {
      group: 'tools',
      className: 'icon-custom tool2',
      title: translate('控选'),
      action: {
        click: function (event) {
          lassoTool.activateSelection(event)
        }
      }
    },
    'space-tool': {
      group: 'tools',
      className: 'icon-custom tool3',
      title: translate('间距调节'),
      action: {
        click: function (event) {
          spaceTool.activateSelection(event)
        }
      }
    },
    'global-connect-tool': {
      group: 'tools',
      className: 'icon-custom tool4',
      title: translate('连接'),
      action: {
        click: function (event) {
          globalConnect.toggle(event)
        }
      }
    },
    //   =====================
    //     'subprocess-group': {
    //         group: 'activity',
    //         className: 'bpmn-icon-subprocess-expanded',
    //         title: translate('子流程'),
    //         separator: true
    //       },
    //   'subprocess-collapsed': {
    //     group: 'activity',
    //     className: 'bpmn-icon-subprocess-collapsed custom-subprocess',
    //     title: translate('创建折叠子流程'),
    //     action: {
    //       dragstart: createCollapsedSubProcess,
    //       click: createCollapsedSubProcess
    //     }
    //   },
    'subprocess-expanded': {
      group: 'model',
      className: 'bpmn-icon-subprocess-expanded custom-subprocess',
      title: translate('创建子流程'),
      action: {
        dragstart: createExpandedSubProcess,
        click: createExpandedSubProcess
      }
    },
    //   ===========
    // 'tool-separator': {// 工具分割线
    //   group: 'model2',
    //   separator: true
    // },

    'create.start-event': {
      group: 'model',
      className: 'bpmn-icon-start-event-none custom-subprocess',
      title: translate('开始节点'),
      action: {
        dragstart: createStart,
        click: createStart
      }
    },
    'create.start': {
      group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
      className: 'icon-custom event1', // 可以用这些类名自定义
      title: translate('开始'), // 鼠标放上去的提示信息
      action: {
        // 监听事件
        dragstart: createStartEvent().event1, // 拖动
        click: createStartEvent().event1 // 点击
      }
    },
    // 'create.end': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event2', // 可以用这些类名自定义
    //   title: translate('结束'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event2, // 拖动
    //     click: createStartEvent().event2 // 点击
    //   }
    // },
    // 'create.router': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event3', // 可以用这些类名自定义
    //   title: translate('路由'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event3, // 拖动
    //     click: createStartEvent().event3 // 点击
    //   }
    // }
    'create.event4': {
      group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
      className: 'icon-custom event4', // 可以用这些类名自定义
      title: translate('事件'), // 鼠标放上去的提示信息
      action: {
        // 监听事件
        dragstart: createStartEvent().event4, // 拖动
        click: createStartEvent().event4 // 点击
      }
    }
    // 'create.event5': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event5', // 可以用这些类名自定义
    //   title: translate('活动'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event5, // 拖动
    //     click: createStartEvent().event5 // 点击
    //   }
    // },
    // 'create.event6': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event6', // 可以用这些类名自定义
    //   title: translate('文件'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event6, // 拖动
    //     click: createStartEvent().event6 // 点击
    //   }
    // },
    // 'participant': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event7', // 可以用这些类名自定义
    //   title: translate('创建泳道'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createParticipant,
    //     click: createParticipant
    //   }
    // },
    // 'create.event8': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event8', // 可以用这些类名自定义
    //   title: translate('职能流程'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event8, // 拖动
    //     click: createStartEvent().event8 // 点击
    //   }
    // },
    // 'create.event9': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event9', // 可以用这些类名自定义
    //   title: translate('系统接口'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event9, // 拖动
    //     click: createStartEvent().event9 // 点击
    //   }
    // },

    // 'create.event10': {
    //   group: 'model', // group: 属于哪个分组, 比如tools、event、gateway、activity等等,用于分类
    //   className: 'icon-custom event10', // 可以用这些类名自定义
    //   title: translate('流程接口'), // 鼠标放上去的提示信息
    //   action: {
    //     // 监听事件
    //     dragstart: createStartEvent().event10, // 拖动
    //     click: createStartEvent().event10 // 点击
    //   }
    // }
  }
}
