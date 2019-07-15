#### text-align属性，设置文本对齐方式
- text-align: justify;可以让除最后一行之外的文字两端对齐，即每行的左右两端都紧贴行的边缘。

- text-align: center;可以让文本居中对齐。

- text-align: right;可以让文本右对齐。

- text-align: left;是text-align的默认值，它可以让文本左对齐。

#### text-transform属性，添加大小写效果
- lowercase	"transform me"
- uppercase	"TRANSFORM ME"
- capitalize	"Transform Me"
- initial	使用默认值
- inherit	使用父元素的text-transform值。
- none	Default:不改变文字。

####font-weight设置字体粗细
- font-weight: 800;

####line-height设置行间距
- line-height: 2px;

####定义元素在相应方位的偏移量
```css
	h2 {
    position: relative;
	top: 10px;
```
h2往下偏移10px

#### z-index改变重叠元素的位置
z-index的取值是整数，数值大的元素优先于数值小的元素显示。

####hsl()调整颜色的色相
- 概念：色相（hue）、饱和度（saturation）、亮度（lightness）
- 在hsl()里面，色相用色环来代替光谱，色相值就是色环里面的颜色对应的从 0 到 360 度的角度值。
- 饱和度：取0%~100%
- 亮度：100% 亮度是白色， 0% 亮度是黑色，而 50% 亮度是“一般的”。
- 例子：红色hsl为hsl(0, 100%, 50%)

#### 创建渐变元素
- linear-gredient(direction, color1, color2, ...); direction表示颜色渐变方向，一般以color表示颜色。具体用法查询：[CSS linear-gradient() 函数](https://www.runoob.com/cssref/func-linear-gradient.html)
- repeating-linear-gradient()可以指定重复性的渐变

#### transform skex/y属性，让指定元素沿x轴或y轴翻转指定角度
```css
	#bottom {
		background-color: blue;
		transform: skewX(24deg);
	}
```
让id为bottom的元素沿x轴翻转24度

### 浮动（float）是什么？

让文字环绕到图片旁边，让信息改变排列方式。

有四个可能的值：
- left — 将元素浮动到左侧。
- right — 将元素浮动到右侧。
- none — 默认值, 不浮动。
- inherit — 继承父元素的浮动属性。

以下代码可以让文字围绕图片显示：
```css
img {
    float: left;
    margin-right: 30px;
}
```

#### 两列布局
```css
div:nth-of-type(1) {
    width: 48%;
    float: left;
  }
  
div:nth-of-type(2) {
    width: 48%;
    float: right;
  }
```

#### 清除浮动

浮动框不属于文档的普通流，元素浮动之后，文档中的普通流就会表现得和浮动框不存在一样，当浮动框高度超出包含框的时候，也就会出现包含框不会 自动伸高来闭合浮动元素（“高度塌陷”现象）。顾名思义，就是漂浮于普通流之上，像浮云一样，但是只能左右浮动。

正是因为浮动的这种特性，导致本属于普通流中的元素浮动之后，包含框内部由于不存在其他普通流元素了，也就表现出高度为0（高度塌陷）。在实际布局中，往往这并不是我们所希望的，所以需要闭合浮动元素，使其包含框表现出正常的高度。

**清除浮动的方法**

- 添加额外标签

在浮动元素末尾添加空的标签：
```css
<div style=”clear:both”></div>
```

#### 定位（position）

定位可以让我们精准的在页面上移动指定元素。

主要有4种类型：

- 静态定位（Static positioning）：把元素放到默认位置
- 相对定位(Relative positioning)：在正常的文档流中移动元素
- 绝对定位(Absolute positioning)：将元素完全从页面的正常布局流中移出，将它单独放在一个图层中。我们可以将元素相对于页面的` <html> `元素边缘固定，或者相对于离元素最近的被定位的祖先元素(ancestor element)。
- 固定定位(Fixed positioning)与绝对定位非常类似，将一个元素相对浏览器视口固定，主要用于浏览器导航菜单。

相对定位代码示例：

```css
.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

绝对定位代码示例（此时元素会脱离原来的位置，离页面顶部30px，左边30px）：

```css
.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

```

#### 表格

主要用`<form>, <div>, <label>, <input>`四种属性进行布局。示例代码如下：

```html
<form>
  <p>First of all, tell us your name and age.</p>
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname">
  </div>
  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname">
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" id="age">
  </div>
</form>

```

