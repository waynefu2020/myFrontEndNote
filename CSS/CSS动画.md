**修改动画的填充模式**
- 让按钮在鼠标悬停时高亮：animation-fill-mode: forwards;

**使用CSS动画创建运动**
- animation-iteration-count: 3; 这个属性可以让你控制动画循环的次数，这里动画会在运行3次后停止，如果想无限循环，可以设置成infinite。
- animation-timing-function规定动画的速度曲线，表现物体的加速减速过程；

**贝塞尔曲线**
cubic-bezier来定义贝塞尔曲线。曲线的形状代表了动画的速度。曲线在 1*1 的坐标系统内，曲线的 X 轴代表动画的时间间隔（类似于时间比例尺），Y 轴代表动画的改变。
cubic-bezier函数包含了 1 * 1 网格里的4个点：p0、p1、p2和p3。其中p0和p3是固定值，代表曲线的起始点和结束点，坐标值依次为 (0, 0) 和 (1, 1)。
你只需设置另外两点的 x 值和 y 值，设置的这两点确定了曲线的形状从而确定了动画的速度曲线。在 CSS 里面通过(x1, y1, x2, y2)来确定p1和p2。
例子：·animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);·
