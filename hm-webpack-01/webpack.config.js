// 向外暴露的打包配置对象
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例对象
 const htmlPlugin = new HtmlWebPackPlugin({
     template: path.join(__dirname,'./src/index.html'),//源文件
     filename: 'index.html' // 生成文件名字
 })

module.exports = {
    mode: 'development',
    // // 默认src下的index.js是入口，约定大于配置
    plugins: [
        htmlPlugin
    ],
    module: {//所有第三方模块的匹配规则
        rules: [//第三方匹配规则
            // exclude 一定要排除这个文件
            { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },//千万不能忘记添加 exclude排除项
        ]
    }    

}