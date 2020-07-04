
# 组件构建 - Close Button

目前版本（2020年7月4日）的网站里，内容展示模块用了统一的组件 AppContent，当中有一个功能是点击右上角关闭浮层。

![](/asset/blog/back-button-1.png)

在网上找了一些参考和教程，大部分都指向了 react-router 提供的 `history` 方法，但当空降链接时处理方法便非常麻烦，于是我自己想了一个野生方法，灵感来源于之前在做 react-transition-group 的引用时碰到的路径字段处理的方法：

`location.pathname.split('/').slice(0,2).join('/')`

该方法从当前的路径中取前两段，比如当前链接为 `http://brunodai.com/blog/article/react-study-sass-props` ，返回值为 `/blog`

这样既能解决空降链接没有历史记录的问题，也实现了预期效果。缺点是没有泛用性，受限于当前网站的结构规划。如果以后路径结构改变了，需要重新处理这里的动作。