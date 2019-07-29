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

### name属性

返回函数的名字：

```js
function f() {}
f.name
// f
```

主要的用户在于获取参数函数的名字。

### length属性

返回函数预期传入的参数数量。

```js
function f(a, b) {}
f.length
//2
```

用法：判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”（overload）。

(这里看的不太明白，要等后面看了对象的知识再回来重温下)

### toString()

返回一个字符串，内容是函数的源代码：

```js
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }
```

## 作用域

作用域是指变量存在的范围。

函数外部声明的变量就是全局变量（global variable），可以在函数内外部读取。

```js
var v = 1;

function f() {
  console.log(v);
}

f()
// 1
```

以上代码中，v就是一个全局变量，它可以在f()函数内读取。

在函数内部定义的变量，外部无法读取，称为局部变量（local variable）。

函数内部定义的变量，会在该作用域内覆盖同名全局变量。

```js
var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f() // 2
v // 1
```

### 函数本身的作用域

函数的作用域和变量一样，就是其声明所在的作用域，和其运行时所在的作用域无关。

```js
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```

函数x是在函数f的外部声明的，所以它的作用域绑定外层，内部变量a不会到函数f体内取值，所以输出1，而不是2。

## 参数

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

```js
function square(x) {
  return x * x;
}

square(2) // 4
square(3) // 9
```

上述的x就是参数，每次运行函数都需要这个值，否则就得不到结果。

### 传递方式

函数参数如果是原始类型的值（字符串、数值、布尔值），传递方式是**传值传递。**

这意味着，在函数体内修改参数值，不会影响到函数外部。

```js
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
```

如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是**传址传递**（pass by reference）。传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

```js
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2
```

如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

```js
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]
```

### 同名参数

如果有同名的参数，则取最后出现的那个值。

```js
function f(a, a) {
  console.log(a);
}

f(1, 2) // 2
```

如果没有提供第二个参数，a的取值就变成了undefined。如果想获得第一个a的值，就需要用到arguments对象。

### arguments对象

arguments对象可以读取函数体内部所有参数。这个对象只有在函数体内部，才可以使用。

```js
var f = function (one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

f(1, 2, 3)
// 1
// 2
// 3
```

## 闭包

闭包是能够读取其它函数内部变量的函数。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

```js
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

以上代码中，f2就是闭包，能让外部直接读取到f1的内部变量。

闭包的作用有两个：

- 读取函数内部变量；

- 让这些变量始终保存在内存中，不会被当做垃圾回收。

- 封装对象的私有属性和私有方法

```js
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge()
```

上述代码中，函数`Person`的内部变量`_age`，通过闭包`setAge`和`getAge`，变成了返回对象`p1`的私有变量。

