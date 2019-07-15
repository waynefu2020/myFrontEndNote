它通过把 HTML 元素转换为具有行和列的网格容器，以便将子元素放置在所需要的位置。

**创建CSS网格**
将display的指设置为grid即可。

注意：
在 CSS 网格中，父元素称为容器（container），它的子元素称为项（items）。

**使用 grid-template-columns/rows 添加多列/行**

属性值的个数表示网格的列数，而每个值表示对应列的宽度

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
/*创建两个宽度为50px的列*/
```
**grid-gap 更快地添加间距**

如果grid-gap有一个值，行与行之间和列与列之间将添加等于该值的间隙。
但是，如果有两个值，第一个值将作为行间隙的高度值，第二个值是列间隙的宽度值。

**使用grid-column/row来控制剩余部分**

网格的假想水平线和垂直线被称为线（lines）。这些线在网格的左上角从 1 开始编号，垂直线向右、水平线向下累加计数。

`grid-column`属性可以定义网格项开始和结束的位置，控制每个网格占用的列数。

```css
.item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
	/*占用网格的最后两列，2~4列*/
  }
```
**使用repeat函数减少重复**
如果要添加100行高度相同的网格，可以使用repeat函数。

```css
grid-template-rows: repeat(100, 50px);
/*添加100行网格，每行高度50px*/
```
**auto-fill/fit自动填充**
auto-fit效果几乎和auto-fill一样。

不同点仅在于，当容器的大小大于各网格项之和时，auto-fill将会持续地在一端放入空行或空列，这样就会使所有网格项挤到另一边；

而auto-fit则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。



