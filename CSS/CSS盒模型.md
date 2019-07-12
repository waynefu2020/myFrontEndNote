### 模型展示图
![boxmodel](box-model-standard-small.png "boxmodel")

#### padding

 CSS 框的内边距 ——这一层位于内容框的外边缘与边界的内边缘之间。该层的大小可以通过简写属性padding 一次设置所有四个边，或用 padding-top、padding-right、padding-bottom 和 padding-left 属性一次设置一个边。

 #### border

 CSS框的边界，默认大小为0，所以不设置大小是看不到的。 border 简写属性可以让我们一次设置所有四个边，例如  `border: 1px solid black;` 但这个简写可以被各种普通书写的更详细的属性所覆盖：

 #### margin

 称为外边距，它在布局中推开其它 CSS 框。其表现与 padding 很相似；简写属性为 margin，单个属性分别为 margin-top、margin-right、margin-bottom 和 margin-left。

 ### 盒模型的高级属性

 #### 设置宽和高的约束
通过属性 min-width、max-width、min-height 和 max-height 实现。

#### 完全改变盒模型
盒子的总宽度是padding-right, padding-left, border-right, border-left之和。如果我想要一个总宽度为border宽度的盒子，怎么办呢？

可以使用属性box-sizing调整盒模型。 用值 border-box，它将盒模型更改为这样新的模型：

![border-box](box-model-alt-small.png "border-box")