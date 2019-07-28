# 函数

函数是一段可以反复调用的代码块，可以输入不同的参数，返回不同的值。有点像一个功能模块，把代码打包进去。

## 基本知识

### 3种声明函数的方法

- `function`命令

`function`命令声明的代码块，就是函数。语法如下：

```js
function print(s) {
  console.log(s);
}
```

上面的代码打印了一个为`print()`的函数。

- 函数表达式

变量赋值的写法：

```js
var print = function(s) {
  console.log(s);
};
```

用函数表达式声明函数时，`function`命令后面不能带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```js
var print = function x(){
  console.log(typeof x);
};

x
//Uncaught ReferenceError: x is not defined
```

- `function`构造函数

```js
var add = new Function(
  'x',
  'y',
  'return x + y'
)

//等同于
function add(x, y) {
  return x + y;
}
```

以上代码，`Function`构造函数接受3个参数，只有最后一个是add函数的“函数体”，其它都是参数。

无论传递多少数量的参数给函数，**只有最后一个参数会被当做函数体。**

但是，**这种声明方式不直观，很少有人使用。**

### 函数重复声明

如果一个函数被多次声明，新的声明就会覆盖旧的声明。

### 圆括号运算符，return语句和递归

想要调用函数，要使用圆括号运算符。圆括号之中，可以加入参数。

```js
function add(x, y) {
  return x + y;
}

add (1, 2)
```

return语句不是必须的，但如果没有，函数就不会返回任何值。

函数可以调用自身，这就是递归。

### 函数名的提升

js将函数名视同变量，所以声明函数时，会被提升到代码头部。

```js
f();

function f() {}
// 不会报错，因为f()已经被提升到了头部。就是在调用之前已经被声明。
```

## 属性和方法


## 作用域


## 参数