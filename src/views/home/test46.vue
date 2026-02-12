<script>
//  所有属性 可选
// {
//   class,
//   style,
//   attrs,
//   props,
//   domProps,
//   on,
//   nativeOn,
//   directives:[
//     {
//       name,
//       value,
//       expression,
//       arg,
//       modifiers
//     }
//   ],
//   scopedSlots:{
//     default:props=>createElement()
//   },
//   slot,
//   key,
//   ref,
//   refInFor
// }
 
export default {
  data() {
    return {
      mydata: "11"
    };
  },
  render: function(createElement) {
    return createElement(
      "div",
      {
        attrs: {
          id: "app"
        },
        style: {
          color: "red"
        }
        //   on: {
        //     click: function() {
        //       alert('Hello, Vue!')
        //     }
        //   }
      },
      [
        createElement(
          "span",
          {
            on: {
              click: function() {
                alert("我是事件!");
              }
            }
          },
          "This is a span" + this.mydata
        ),
        createElement("a", { attrs: { href: "https://vuejs.org" } }, "Vue.js"),
        createElement("div", {
          on: {
            click: function() {
              alert("输出的是dom元素数据!");
            }
          },
          domProps: {
            innerText: this.mydata
          }
        }),
        createElement("elInput", {
          // on: {
          //   input: ($event)=> {
          //     console.log(this.mydata);
          //     console.log($event);
          //     // console.log($event.target.value)
          //     this.mydata= $event.target.value
          //   }
          // },
          on: {
            input: val => {
              console.log(this.mydata);
              console.log(val);

              this.mydata = val;
            },
            blur: val => {
              console.log("失去焦点");
              console.log(val);
            },
            focus: val => {
              console.log("聚焦点");
              console.log(val);
            }
          },
          attrs: {
            id: "myInput",
            value: this.mydata,
            Placeholder: "请输入内容"
          },
          style: {
            color: "red",
            maxWidth: "200px" // 控制最大宽度
          }
        })
      ]
    );
  }
};
</script>
