### webpack 相关概念简单讲解

先来查看我们安装了哪些npm 包 及其作用
```
"devDependencies": {
    "@babel/core": "^7.2.2", //babel的核心代码在这个模块
    "@babel/plugin-proposal-class-properties": "^7.3.0",//es6 class写法需要，属于插件类型
    "@babel/polyfill": "^7.2.5",//babel默认只转换 es6的写法，而不包括es6新增的API，比如Array.of ..等，为了能正常转变新的API，需要这个模块
    "@babel/preset-env": "^7.3.1",//这个即是解释器，把es6转为标准的，兼容性的js写法。babel目前【推荐】使用这个模块做转换，也有其他模块同样可以转换
    "babel-loader": "^8.0.5",//这个是webpack的loader需要，loader即加载器，意思是在使用webpack打包前，请使用各种loader先处理文件(比如转译es6)
     "css-loader": "^2.1.0",//css-loader和style-loader都是对css样式文件做处理
    "style-loader": "^0.23.1",
    "webpack": "^4.29.0",
    "webpack-cli": "^3.2.1"//webpack命令行工具
  },
  "babel": { //babel的配置，上面依赖中表示需要用到的工具，而这个则是定义，在使用babel的时候应该如何去解析你的代码
    "presets": [
      "@babel/preset-env"//默认使用preset-env去解析es6代码，出了这个之外还有其他模块，比如@babel/preset-stage-0、1、2这个涉及到es7的实验性转码，根据个人需求添加。这里只转译es6写法，所以只需要preset-env
    ],
    "plugins":["@babel/plugin-proposal-class-properties"]//这个插件用于转换类的属性成员变量等。因为用到了es6 的class写法
  }
```

>babel 的配置有几种方式。除了上面的再package.json中配置babel字段，还可以单独创建一个.babelrc文件。个人喜欢再package.json中配置


#### webpack babel-loader babel-core babel-preset-env 等的关联
>因为版本关系，babel目前已经是7.X版本。原本babel-xxx 这种命令已经改成了 @babel/xxx 的形式。所以网上很多资料都是旧的，只要一一对应名称就可以找到相应的模块。

**关联解释**：webpack 是对各种静态资源进行打包。它本身只能处理.js文件。 为了将js文件以外的静态资源进行打包处理，需要各种loader，比如css-loader,style-loader 这两个loader配合使用可以将单独的css文件合并到webpack中，最后动态插入到你的html文件中生成 style标签内容

所以一整个流程大概是

- 执行webpack 命令 （选择mode 是development production or none）
 - 根据入口 entry构成一个依赖图，去解析打包文件。遇到各种文件import的时候，根据webpack.config.js中的module.rules中配置的各种loader去解析处理不同的文件类型。
  - 最终输出 bundle.js，在自己的html文件中引入唯一的一个bundle.js文件即可






