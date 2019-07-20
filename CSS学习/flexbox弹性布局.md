# flex弹性布局

## 什么是flexbox

在响应式 Web 设计中，UI 布局必须适配不同尺寸的设备。

CSS3 引入了 Flexible Box，简称 flexbox（弹性盒子），它特别适合用来创建弹性的页面布局。

弹性布局以一种可预见的方式排列元素，使其适用于不同尺寸的设备。

如果你想要：

- 创建不同内容的列字段
- 在一行中，创建几个盒子，每个盒子占用同样的空间

这些都可以通过创建flexbox来实现。

## flex模型说明

![flexterms](flex_terms.png "flex模型")

- 主轴（main axis）沿着flex元素延伸。起点和终点分别称为main start和main end。
- 交叉轴（cross axis）是垂直于 flex 元素放置方向的轴。该轴的开始和结束被称为 cross start 和 cross end。
- 设置了 display: flex 的父元素（在本例中是 `<section>`）被称之为 flex 容器（flex container）。
- 在 flex 容器中表现为盒子的元素被称之为 flex 项（flex item）

## 如何创建flexbox

在css选择器中，添加```display: flex;```语句，完整示例如下：

```css
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
```

## 更改主轴（main axis）的方向

属性值：flex-direction，可以指定主轴的方向，默认值为row，排成一行。

如果要把页面元素排成一列，可以使用如下代码：

`flex-direction: column;`

## 使用 flex-wrap 属性包裹一行或一列

换行方向可选值：

- nowrap：默认值，不换行。
- wrap：行从上到下排，列从左到右排。
- wrap-reverse：行从下到上排，列从右到左排。

## flex-flow缩写

 flex-direction 和 flex-wrap 可以缩写成 flex-flow。

原代码：

```css
flex-direction: row;
flex-wrap: wrap;
```

缩写代码：

```css
flex-flow: row wrap;
```

## 使用flex短方法属性

flex-grow、flex-shrink和flex-basis属性可以在flex中一同设置。

`flex: 1 0 10px;`会把项目属性设为`flex-grow: 1;`、`flex-shrink: 0;`以及`flex-basis: 10px;`。

```css
  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
 ```

## 动态尺寸

以下代码表示flex项沿主轴的可用空间大小，1表示每个元素占用空间相等。

```css
article {
  flex: 1;
}
```

如果改为以下代码：

```css
article:nth-of-type(3) {
  flex: 2;
}
```

表示第3个元素会占用2个空间，如果一行中有4个单位的位置，那么此元素就占据了1/2。

除此之外，还可以指定flex最小值：

```css
article {
  flex: 1 200px;
}
article:nth-of-type(3) {
  flex: 2 200px;
}
```

以上代码表示每个flex 项将首先给出200px的可用空间，然后，剩余的可用空间将根据分配的比例共享。

## 水平和垂直对齐

### 使用 align-items 控制flex项在交叉轴上的位置

- 默认值为strech，会让flex元素沿着交叉轴方向填充父容器。如果父容器没有固定width，则所有flex项会变成与最长的flex项一样长。（高度保持一致）
- 使用center值会让这些项保持原有的高度，但是会在交叉轴居中。
- 可以使用`align-self`属性覆盖`align-items`原有的动作

### 使用 justify-content 控制flex项在主轴上的位置

- 默认值是 `flex-start`，这会使所有 flex 项都位于主轴的开始处。
- 你也可以用 `flex-end` 来让 flex 项到结尾处。
- `center` 在 `justify-content` 里也是可用的，可以让 flex 项在主轴居中。
- 而我们上面用到的值 `space-around` 是很有用的——它会使所有 flex 项沿着主轴均匀地分布，在任意一端都会留有一点空间。
- 还有一个值是 `space-between`，它和 `space-around` 非常相似，只是它不会在两端留下任何空间。

## flex排序

代码示例：

```css
button:first-child {
  order: 1;
}
```

- order值越大，排名越靠后。相同order值的flex项，按照原来的顺序排列。
- 假如你有四个元素，其 order 值分别是2，1，1和0，那么它们的显示顺序就分别是第四，第二，第三，和第一。
