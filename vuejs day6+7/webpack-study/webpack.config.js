//这个配置文件  其实就是一个js文件，  通过node中的模块操作 向外暴露一个 配置对象
const path=require('path')
//导入 在 内存中 生成html页面的插件
const htmlWebpackPlugin=require('html-webpack-plugin')
/*只要是插件 就要放到plugins节点中去*/
module.exports={
    entry:path.join(__dirname,'./src/main.js'), //入口 表示要用 webpack 打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'), //指定 打包好的文件，输出到哪个目录中去
        filename:'bundle.js'//这是指定 输出的文件的名称
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            //这个插件的两个作用：
            //1.自动在内存中 根据指定页面生成 一个内存的页面
            //2.自动， 把打包好的 bundle.js 追加到 页面中去
            //创建一个在内存中 生成html页面的插件
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        //这个节点 用于 配置 所有第三方模块加载器
        rules: [
            //所有第三方模块 的 匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//这是配置处理.css文件的第三方loader 规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//这是配置处理.less文件的第三方loader规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}//处理 scss文件的第三方loader规则
        ]
    }
}