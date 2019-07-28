# 条件语句

## if...else...语句

```js
if (condition) {
  code to run if condition is true
  // 如果判断条件为真，则运行这行代码
} else {
  run some other code instead
  // 如果判断条件为假，则运行这行代码
}
```

如果有两个以上的选择，可以加入`else...if`语句。下面是一个天气预报应用的例子。

```html
<!--创建一个表单-->
<label for="weather">Select the weather type today: </label>
<!--创建一个下拉选单，提示为make a choice-->
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>
<!--创建一个天气说明的段落，用于存储文字-->
<p></p>
```

```js
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
```

## 比较运算符

比较运算符用于判断条件语句中的条件。一般有如下几个：

- `===`和`!==`是严格等于和不等于。
- `<`和`>`是判断大于和小于
- `<=`和`>=`判断是否小于或等于，和大于或等于

## 嵌套if...else

将另外一个if...else语句嵌套于另外一个语句中。

```js
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
  }
}
```

## 逻辑运算符

- `&&`，逻辑与，可以并列多个表达式。每个表达式返回`true`时，整个表达式的值才为`true`。
- `||`，逻辑或，其中任何一个表达式返回`true`，整个表达式的值即为`true`。
- `!`，逻辑非，对一个布尔值取反, 非true返回false,非false返回true.

一个`&&`的例子：
```js
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}
// 只有当choice === 'sunny'和temperature < 86返回true时，代码才能运行
```

注意：**在条件语句中，不能多次给同一个变量赋值。以下代码为错误示范：**

```js
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```
正确的写法如下：

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}

## switch语句

多个`if...else`连在一起使用的时候，可以转换为更方便的`switch`结构。

输入单个表达式，检查多个选项，找到匹配的选项，执行代码。

```js
switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
    // ...
}

```

根据`fruit`的值，执行相应的`case`，如果所有`case`都不符合，则执行最后的default部分。

每个`case`代码块内的`break`语句不能少，否则会直接执行下面的`case`代码块，而不是跳出`switch`结构。

## 三元运算符

该运算符需要三个运算子，也可以用于逻辑判断。

```js
(condition) ? expression1 : expression2
// 如果'condition'为true，则返回expression1，否则返回expression2
```

下面的代码中，如果`n`能被2整除，那么`even`就为`true`，否则就是`false`

```js
var even = (n % 2 === 0) ? true : false;
```
