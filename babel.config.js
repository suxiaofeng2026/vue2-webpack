const proPlugins = []
// 根据环境变量 是否关闭console
console.log(process.env.NODE_ENV, '----===')
// 如果当前是生产环境，则使用去掉console的插件
if (process.env.NODE_ENV === 'production') {
  proPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]

  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining', // 可选链 ?.
    '@babel/plugin-proposal-nullish-coalescing-operator', // 空值合并 ??
    ...proPlugins
  ]
}
