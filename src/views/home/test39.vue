<template>
  <div id="mycontainer" style="width: 100%; height: 100vh"></div>
</template>

<script>
import { Graph, Cell, Shape, Path } from "@antv/x6";
export default {
  data() {
    return {};
  },
  methods: {
    init() {
      let LINE_HEIGHT = 24;
      let NODE_WIDTH = 150;
      Graph.registerPortLayout(
        "erPortPosition",
        portsPositionArgs => {
          return portsPositionArgs.map((_, index) => {
            return {
              position: {
                x: 0,
                y: (index + 1) * LINE_HEIGHT
              },
              angle: 0
            };
          });
        },
        true
      );

      //   注册节点样式
      Graph.registerNode(
        "er-rect",
        {
          inherit: "rect",

          markup: [
            {
              tagName: "rect",
              selector: "body"
            },
            {
              tagName: "text",
              selector: "label"
            },
            {
              tagName: "text",
              selector: "mytitle"
            }
          ],
          attrs: {
            rect: {
              strokeWidth: 1,
              stroke: "#5F95FF",
              fill: "#5F95FF"
            },
            label: {
              fontWeight: "bold",
              fill: "#ffffff",
              fontSize: 12
            },
            mytitle: {
              // text: "mytitle",
              refX: 40,
              refY: 14,
              fill: "rgba(0,0,0,0.85)",
              //   stroke: 'red',
              fontSize: 12
              // 'text-anchor': 'start',
            }
          },
          ports: {
            groups: {
              list: {
                markup: [
                  {
                    tagName: "rect",
                    selector: "portBody"
                  },
                  {
                    tagName: "text",
                    selector: "portNameLabel"
                  },
                  {
                    tagName: "text",
                    selector: "portTypeLabel"
                  }
                ],
                attrs: {
                  portBody: {
                    width: NODE_WIDTH,
                    height: LINE_HEIGHT,
                    strokeWidth: 1,
                    stroke: "#5F95FF",
                    fill: "#EFF4FF",
                    magnet: true
                  },
                  portNameLabel: {
                    ref: "portBody",
                    refX: 6,
                    refY: 6,
                    fontSize: 10
                  },
                  portTypeLabel: {
                    ref: "portBody",
                    refX: 95,
                    refY: 6,
                    fontSize: 10
                  }
                },
                position: "erPortPosition"
              }
            }
          }
        },
        true
      );
      // 注册连线2
      Graph.registerConnector(
        "curveConnector",
        (sourcePoint, targetPoint) => {
          let hgap = Math.abs(targetPoint.x - sourcePoint.x);
          let path = new Path();
          path.appendSegment(
            Path.createSegment("M", sourcePoint.x - 4, sourcePoint.y)
          );
          path.appendSegment(
            Path.createSegment("L", sourcePoint.x + 12, sourcePoint.y)
          );
          // 水平三阶贝塞尔曲线
          path.appendSegment(
            Path.createSegment(
              "C",
              sourcePoint.x < targetPoint.x
                ? sourcePoint.x + hgap / 2
                : sourcePoint.x - hgap / 2,
              sourcePoint.y,
              sourcePoint.x < targetPoint.x
                ? targetPoint.x - hgap / 2
                : targetPoint.x + hgap / 2,
              targetPoint.y,
              targetPoint.x - 6,
              targetPoint.y
            )
          );
          path.appendSegment(
            Path.createSegment("L", targetPoint.x + 2, targetPoint.y)
          );

          return path.serialize();
        },
        true
      );
      //注册连线风格
      Graph.registerConnector(
        "mindmap",
        (sourcePoint, targetPoint, routerPoints, options) => {
          let midX = sourcePoint.x + 10;
          let midY = sourcePoint.y;
          let ctrX = (targetPoint.x - midX) / 5 + midX;
          let ctrY = targetPoint.y;
          let pathData = `
     M ${sourcePoint.x} ${sourcePoint.y}
     L ${midX} ${midY}
     Q ${ctrX} ${ctrY} ${targetPoint.x} ${targetPoint.y}
    `;
          return options.raw ? Path.parse(pathData) : pathData;
        },
        true
      );
      let graph = new Graph({
        container: document.getElementById("mycontainer"),
        grid: {
          visible: true
        },
        background: {
          color: "#F2F7FA"
        },
        mousewheel: {
          enabled: true,
          minScale: 0.2,
          maxScale: 4
        },
        connecting: {
          // 当 snap 设置为 true 或者 false 代表开启和关闭连线过程中自动吸附，开启时距离目标 50px 是触发吸附
          // snap: {
          //     radius: 50,
          //     },
          allowBlank() {
            // 根据条件返回 true or false
            return false;
          },
          router: {
            name: "er",
            args: {
              offset: 25,
              direction: "H"
            }
          },
          createEdge() {
            return new Shape.Edge({
              connector: {
                name: "curveConnector"
              },
              attrs: {
                sourceMarker: "block",
                line: {
                  //   stroke: '#A2B1C3',
                  stroke: "green",
                  strokeWidth: 2,

                  targetMarker: {
                    name: "block" //ellipse classic
                    // rx: 10, // 椭圆箭头的 x 半径
                    // ry: 6, // 椭圆箭头的 y 半径
                  }
                }
              }
            });
          }
        }
      });

      fetch("/data/er.json")
        .then(response => response.json())
        .then(data => {
          let cells = [];
          data.forEach(item => {
            if (item.shape === "edge") {
              cells.push(graph.createEdge(item));
            } else {
              console.log(item);
              cells.push(graph.createNode(item));
            }
          });
          console.log(cells);
          graph.resetCells(cells);
          graph.centerContent(); //居中对齐
          graph.zoomToFit({ padding: 10, maxScale: 1 });
        });

      setTimeout(() => {
        let cell5 = graph.getCellById("5");
        console.log(cell5);
        cell5.setAttrs({ line: { stroke: "red" } });
        // cell5.attrs.line.stroke="red"
      }, 2000);
    }
  },
  mounted() {
    this.init()
  }
};
</script>
