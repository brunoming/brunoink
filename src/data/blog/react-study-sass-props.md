
# 组件构建 - Sass 和 Props

因为之前一直负责的是组件工作，加上有一些 html/css 基础，所以写基本结构没啥问题。

## Stylus vs. Sass

据我目前知道的情况，大家在实现 CSS 时似乎比较少写原生的 CSS 样式，而是用第三方的 CSS 支持库代替。比如我之前接触的组件库作者喜欢用 Stylus，所以一开始我打算用 Stylus 写，结果踩了第一个大坑 —— Stylus 在 react 中的支持问题。

`create-react-app` 原生是不支持 Stylus 的，需要自己额外对 webpack 进行配置。在网上找了一些教程，尝试很久之后放弃折腾，我直接放弃了 Stylus 转用支持比较齐全的 Sass（😅就是这么简单），毕竟用起来都差不多。

在习惯了 Sass 的语法以后，现在已经离不开 Sass 了，对于之前一直在学原生 CSS 的我简直是特大喜讯😂

比较容易遇到的一个问题是在 VSCode 里写 Sass 时，如果写的时候用了 `@include` ，自动格式化代码时会错误缩进导致编译报错。这个暂时还没找到解决办法😅，还好写 Sass 因为缩进要求比较严格，不太需要用到自动格式化。

另外是 Sass 跨文件引用，在组件层可以这样引用 `@import filename`，但在 App.js 这样的顶层文件中就必须要 `@import './filename.sass'` 否则会报错，原因还没搞清楚，不过影响不是很大。

## Props 的使用

React 的 Props 方法提供了在组件树中上下级传递参数的功能。一开始用的时候比较难掌握（js基础孱弱...😅），现在基本能搞清楚 `this.props.xxx` 的工作原理和用法。

不过在组件层级比较多的时候用起来有些麻烦，今天看到有 `React.createContext` 这样的方法可以在组件树中跨层级传递参数，需要抽空实验一下。

> **2020年7月4日踩的小坑**
> 
> 如果需要在初始化组件时就使用 `this.props`，需要将 `construction(props)` 写为 `construction(props), super(props)`，否则无法在组件初始化时调用 props
