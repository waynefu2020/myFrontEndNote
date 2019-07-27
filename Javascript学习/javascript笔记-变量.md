# 变量

变量就是一个存放数值的容器。可以是数字、字符串，并且变量可以随时改变。

**注意：变量不是数值本身，它仅仅是一个用于存储数值的容器。**
![boxes](/javascript学习/boxes.png '盒子')

## 声明变量

声明一个变量的语法是在 `var` 或 `let` 关键字之后加上这个变量的名字：

```javascript
let myName;
let myAge;
```

## 初始化变量

定义变量后，在变量名之后加一个'='，然后是数值：

```javascript
myName = 'Chris';
myAge = 37;
```

## var与let的区别

`var`比较古老，`let`比较新。

首先，如果你编写一个声明并初始化变量的多行 JavaScript 程序，你可以在初始化一个变量之后用 `var` 声明它，它仍然可以工作。

```javascript
myName = 'Chris';

function logName() {
  console.log(myName);
}

logName();

var myName;
```

这样的操作并不适用于`let`，这样使用`let`会报错。

其次，使用`var`时，可以多次声明相同的变量，但是`let`不能。建议在代码中多使用`let`。

## 变量类型

### Number

存储整数或浮点数。

`let myAge = 17;`

### String

当你给一个变量赋值为字符串时，你需要用单引号或者双引号把值给包起来，否则JavaScript将会把这个字符串值理解成别的变量名。

```javascript
let dolphinGoodbye = 'So long and thanks for all the fish';
```

### Boolean

Boolean 的值有2种：true或false。它们通常被用于在适当的代码之后，测试条件是否成立。举个例子，一个简单的示例如下： 

`let iAmAlive = true;`

### Array

数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔。

```javascript
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10,15,40];
```

创建数组后，可以用以下语句提取其中的值：

```javascript
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

### Object

中文称为'对象'。比如一个人，他作为对象，会有身高，年龄，籍贯等等信息，这些信息又称为属性。

```javascript
let dog = { name : 'Spot', breed : 'Dalmatian' };
```

检索对象中的信息：

```
dog.name
```