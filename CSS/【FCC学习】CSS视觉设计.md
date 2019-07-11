**text-align属性，设置文本对齐方式**
- text-align: justify;可以让除最后一行之外的文字两端对齐，即每行的左右两端都紧贴行的边缘。

- text-align: center;可以让文本居中对齐。

- text-align: right;可以让文本右对齐。

- text-align: left;是text-align的默认值，它可以让文本左对齐。

**text-transform属性，添加大小写效果**
- lowercase	"transform me"
- uppercase	"TRANSFORM ME"
- capitalize	"Transform Me"
- initial	使用默认值
- inherit	使用父元素的text-transform值。
- none	Default:不改变文字。

**font-weight设置字体粗细**
- font-weight: 800;

**line-height设置行间距**
- line-height: 2px;

**定义元素在相应方位的偏移量**
```css
	h2 {
    position: relative;
	top: 10px;
```
h2往下偏移10px

**z-index改变重叠元素的位置**
z-index的取值是整数，数值大的元素优先于数值小的元素显示。

**hsl()调整颜色的色相**
- 概念：色相（hue）、饱和度（saturation）、亮度（lightness）
- 在hsl()里面，色相用色环来代替光谱，色相值就是色环里面的颜色对应的从 0 到 360 度的角度值。
- 饱和度：取0%~100%
- 亮度：100% 亮度是白色， 0% 亮度是黑色，而 50% 亮度是“一般的”。
- 例子：红色hsl为hsl(0, 100%, 50%)

**创建渐变元素**
- linear-gredient(direction, color1, color2, ...); direction表示颜色渐变方向，一般以color表示颜色。具体用法查询：[CSS linear-gradient() 函数](https://www.runoob.com/cssref/func-linear-gradient.html)
- repeating-linear-gradient()可以指定重复性的渐变

**transform skex/y属性，让指定元素沿x轴或y轴翻转指定角度**
```css
	#bottom {
		background-color: blue;
		transform: skewX(24deg);
	}
```
让id为bottom的元素沿x轴翻转24度

