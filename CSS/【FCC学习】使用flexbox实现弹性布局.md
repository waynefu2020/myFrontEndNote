在响应式 Web 设计中，UI 布局必须适配不同尺寸的设备。

CSS3 引入了 Flexible Box，简称 flexbox（弹性盒子），它特别适合用来创建弹性的页面布局。

弹性布局以一种可预见的方式排列元素，使其适用于不同尺寸的设备。

**如何创建flexbox**

在css选择器中，添加```display: flex;```语句，完整示例如下：

```css
<style>
  #box-container {
    display: flex;
    height: 500px;
    
  }
```

**使用 justify-content 属性对齐元素**

flex 容器里的 flex 子元素有时不能充满整个容器，所以我们需要告诉 CSS 如何以特定方案排列和调整 flex 子元素。

幸运的是，我们有justify-content属性处理这个问题。

**使用 align-items 属性对齐元素**

和justify-content类似，align-items也是让元素沿着一个排列。但是它是交叉轴（与主轴垂直的轴）的排列方式。

align-items的可选值和justify-content差不多。

**使用 flex-wrap 属性包裹一行或一列**

换行方向可选值：
- nowrap：默认值，不换行。
- wrap：行从上到下排，列从左到右排。
- wrap-reverse：行从下到上排，列从右到左排。

**使用flex短方法属性**

flex-grow、flex-shrink和flex-basis属性可以在flex中一同设置。

`flex: 1 0 10px;`会把项目属性设为`flex-grow: 1;`、`flex-shrink: 0;`以及`flex-basis: 10px;`。

```css
  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
 ```
 
 