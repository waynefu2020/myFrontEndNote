# 字符串

创建字符串需要加上引号：

```javascript
let string = 'The revolution will not be televised.';
string;
```

## 单引号和双引号

单引号和双引号都可以包裹字符串：

```javascript
let sgl = 'Single quotes.';
let dbl = "Double quotes";
sgl;
dbl;
```

可以根据自己偏好来使用，不过确定以后建议就一直沿用，不随便更改。

## 转义字符

想让符号被识别成文本，就在前面加上/即可。

```js
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
```

## 连接字符串

在字符串之间加上+号，就可以把他们拼接到一起。

```js
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined; 
// 输出 "Hello, how are you?"
```

## 数字与字符串

如果有一个数值变量，你想把它转换成字符串，可以使用以下两种语法：

- `Nmuber()`对象会把其中的参数转换成数字

```js
let myString = '123';
let myNum = Number(myString);
typeof myNum;
```

- 每个数字都有一个`toString()`方法，它会把参数转换成字符串。

```js
let myNum = 123;
let myString = myNum.toString();
typeof myString;
// 输出 "string"
```

## 把字符串当做对象

### 获得字符串的长度

```js
let browserType = 'mozilla';
browserType.length;
//输出 7
```

### 检索特定字符串的字符

```js
browserType[0];
//输出 "m"
browserType[browserType.length-1];
//输出 "a"，长度-1=7-1，为第6个字符
```

### 在字符串中查找子字符串，提取

- 寻找字符串是否在父字符串中，使用`indexOf()`方法

```js
browserType.indexOf('zilla');
//输出结果为 2，即"zilla"在"mozilla"中开始的位置
```

- `slice()`可以用于提取其中一段字符串

```js
browserType.slice(0,3);
// moz
```

第一个参数是开始提取的字符位置，第二个参数不含最后一个字符。

### 转换大小写

`toLowerCase()`和`toUpperCase()`可以将所有字符串转成为大写或者小写。

```js
let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
//"MY NAME IS MUD"
```

### 替换字符串的某部分

使用`replace()`方法，可以将字符串中的一段子字符串替换成另外一段字符串。

```js
browserType.replace('moz','van');
//"vanilla"
```

