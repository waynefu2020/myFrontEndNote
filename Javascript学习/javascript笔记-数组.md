# 数组

数组是一个包含了多个值的对象。

## 创建数组

数组由[]组成，其中的元素用逗号分隔。

```js
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;
```

数组的每一个项目都是字符串，你可以把数字、字符串、变量、另一个数组等各种类型的元素存储在数组中。

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
```

## 访问和修改数组元素

使用括号

```js
shopping[0];
// returns "bread"
```

可以为数组中的某个元素重新赋值：

```js
shopping[0] = 'tahini';
shopping;
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
```

## 获取数组长度

使用`length`方法：

```js
sequence.length;
// should return 7
```

一般`length`方法常用于循环：

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
// 从数组中编号0的元素开始循环
// 在元素编号长度等于数组长度时，终止循环
// 将每个元素打印到控制台
```

## 实用的数组方法

### 字符串和数组之间的转换

- `split()`方法：将长字符串分割成独立的元素

```js
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;
//  ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]
```

将数组转换成字符串还可以用`toString()`方法

```js
let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); 
//Rocket,Flash,Bella,Slugger
```

- 添加和删除数组项

要在数组末尾添加或删除一个项目，我们可以使用 `push()` 和 `pop()`。

```js
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray.push('Cardiff');
 //["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]
```

如果要删除最后一个元素，可以用`myArray.pop();`

`unshift()`和`shift()`作用和前面两个方法相同，不过作用于数组的开头。

