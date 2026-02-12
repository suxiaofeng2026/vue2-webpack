/**
 * 公共的配置和方法
 **/
// 自定义元素的类型 之前定义的就是bpmn:Task
const customElements = ['bpmn:lufei', 'bpmn:namei', 'bpmn:event2', 'bpmn:event3', 'bpmn:event4', 'bpmn:event5', 'bpmn:event6', 'bpmn:event8', 'bpmn:event9', 'bpmn:event10']
const customConfig = {
  // 自定义元素的配置(后面会用到)
  // 'bpmn:Task': {
  //   'url': 'https://img0.baidu.com/it/u=3355887662,1298272292&fm=26&fmt=auto&gp=0.jpg',
  //   'attr': {x: 0, y: 0, width: 48, height: 48}
  // },
  'bpmn:lufei': {
    url: 'https://img0.baidu.com/it/u=2349877463,2527245160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    attr: {
      x: 0,
      y: 0,
      width: 200,
      height: 200
    }
  },
  'bpmn:namei': {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F02%2F20200702233225_hAMLN.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627806086&t=95e5f3969fd8fc6398b99a2f904a6053',
    attr: {
      x: 0,
      y: 0,
      width: 200,
      height: 200
    }
  },
  'bpmn:event1': {
    'url': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTY5LjEgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2OS4xIDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0RGRTRFQTt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiM4MzkwQUM7fQ0KCS5zdDN7ZmlsbDojODM5MEFDO30NCjwvc3R5bGU+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1Ni4zLDQ0LjUgMzIuNCw0NC4zIDMyLjQsMC41IDE1Ni43LDAuNSAxNjguNSwyMi41ICIvPg0KPGcgaWQ9IuW8gOWniyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMjggLTYwNC41KSI+DQoJPHBhdGggaWQ9Iui3r+W+hF83IiBjbGFzcz0ic3QxIiBkPSJNMTEyOC41LDYyNi43djAuNGwxMS43LDIxLjdoMjIuOFY2MDVoLTIyLjhMMTEyOC41LDYyNi43eiIvPg0KCTxwYXRoIGlkPSLot6/lvoRfOCIgY2xhc3M9InN0MiIgZD0iTTEyODQuNyw2MDVoLTE0NC41bC0xMS43LDIxLjh2MC41bDExLjcsMjEuOGgxNDQuNWwxMS44LTIyTDEyODQuNyw2MDV6Ii8+DQoJPHBhdGggaWQ9Iui3r+W+hF8xMiIgY2xhc3M9InN0MyIgZD0iTTExNTMuNiw2MjdsLTkuMi01Ljh2MTEuNUwxMTUzLjYsNjI3eiIvPg0KPC9nPg0KPC9zdmc+DQo=',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event2': {
    'url': './images/event/2.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event3': {
    'url': './images/event/3.svg',
    'attr': { x: 0, y: 0, width: 46, height: 46 }
  },
  'bpmn:event4': {
    'url': './images/event/4.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event5': {
    'url': './images/event/5.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event6': {
    'url': './images/event/6.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event8': {
    'url': './images/event/8.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event9': {
    'url': './images/event/9.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  },
  'bpmn:event10': {
    'url': './images/event/10.svg',
    'attr': { x: 0, y: 0, width: 170, height: 46 }
  }

}
export { customElements, customConfig }
