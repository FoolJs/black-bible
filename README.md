
## black-bible

一些常用的Javascript工具函数，可以简化我们日常的很多操作


## Install

```
npm i black-bible -S
```

## Usage

在Node环境下：

```javascript
const _ = require('black-bible');

function f (a, b,c) {
    return a + b + c;
}

_.curry(f, 1)(2)(3); // 6

```

使用ES6模块：

```javascript
import * as _ from 'black-bible';

function f (a, b,c) {
    return a + b + c;
}

_.curry(f, 1)(2)(3); // 6
```

使用script标签：

```html
<script src="black-bible/umd"></script>
<script>

function f (a, b,c) {
    return a + b + c;
}

_.curry(f, 1)(2)(3); // 6
</script>
```


## Modules

<dl>
<dt><a href="#module_camelCase">camelCase</a> ⇒ <code>String</code></dt>
<dd><p>驼峰化字符串</p>
<p>函数会舍弃字符串的所有特殊字符，无论是在开头还是中间还是结尾，而在非开头处的数字或特殊字符
后的字母会大写</p>
</dd>
<dt><a href="#module_checkedType">checkedType</a> ⇒ <code>String</code></dt>
<dd><p>判断类型的函数</p>
<p>函数会返回对应类型的大写形式</p>
</dd>
<dt><a href="#module_curry">curry</a> ⇒ <code>function</code></dt>
<dd><p>函数柯里化的辅助函数</p>
<p>接受一个函数fn和可选的用于函数fn的参数，返回柯里化后的函数fn，即使函数fn的参数已经满足
同样会返回一个函数而不是fn调用的结果</p>
</dd>
<dt><a href="#module_debounce">debounce</a> ⇒ <code>function</code></dt>
<dd><p>创建一个防抖函数</p>
<p>创建一个防抖函数，根据option选项对象来决定delay延时开始前或结束
后调用回调函数，其中option.before决定是否在延时开始之前触发回调，若是为false，那么
无论option.after为true还是false，都会在延时结束后触发回调，option.after决定是否
在延时结束之后触发回调，函数返回的防抖函数拥有一个cancel方法，用来取消延时调用</p>
</dd>
<dt><a href="#module_deepClone">deepClone</a> ⇒ <code>any</code></dt>
<dd><p>深拷贝函数</p>
<p>一个深拷贝函数，cloneProto参数决定是否拷贝一个对象的原型，不会忽略函数，对象的
Symbol属性，但是对于Symbol属性，仍然传递的是Symbol的引用</p>
</dd>
<dt><a href="#module_every">every</a> ⇒ <code>Boolean</code></dt>
<dd><p>every迭代函数</p>
<p>适用于多种类型的every函数，对于对象的每个元素调用函数，若所有属性都使
函数返回True则返回True，否则返回false</p>
</dd>
<dt><a href="#module_filter">filter</a> ⇒ <code>Array</code></dt>
<dd><p>适用于各种类型的Filter迭代函数</p>
<p>适用于各种类型的Filter迭代函数，对于集合的每一项调用函数，返回函数返回True的
项组成的数组</p>
</dd>
<dt><a href="#module_find">find</a> ⇒ <code>any</code></dt>
<dd><p>find迭代函数</p>
<p>适用于多种类型的find方法，它返回第一个使断言函数返回true的项,
对于Object和Map类型，find返回的将不再是项，而是键值对中的键,
fromIndex为迭代的起点，对于数组来说，是其索引，对于对象Map等类型来说，
是获取他们的所有键的数组的索引</p>
</dd>
<dt><a href="#module_findRight">findRight</a> ⇒ <code>any</code></dt>
<dd><p>find函数的反向函数</p>
<p>从反方向开始迭代，返回第一个使函数返回True的项的值
对于对象或Map，返回的将是他们的键而不是值</p>
</dd>
<dt><a href="#module_forEach">forEach</a> ⇒ <code>Array</code> | <code>Map</code> | <code>Set</code> | <code>String</code> | <code>Number</code> | <code>Object</code></dt>
<dd><p>forEach迭代函数</p>
<p>适用于各种类型的forEach，对集合的每一项运行函数，最终返回集合本身，
可以显式的通过返回false来终止循环</p>
</dd>
<dt><a href="#module_forEachRight">forEachRight</a> ⇒ <code>Array</code> | <code>Object</code> | <code>Map</code> | <code>Set</code></dt>
<dd><p>forEachRight迭代函数</p>
<p>forEach函数的反向函数，从结尾开始迭代，可以通过返回false显式的
结束迭代，返回集合本身</p>
</dd>
<dt><a href="#module_isInContainer">isInContainer</a> ⇒ <code>Boolean</code></dt>
<dd><p>判断一个元素是否在对应容器的可视区域内</p>
</dd>
<dt><a href="#module_limitExec">limitExec</a> ⇒ <code>function</code></dt>
<dd><p>限制函数的执行次数</p>
<p>可选的第三个参数isBefore默认为True，决定函数fn能够执行的次数，
若是isBefore为false，则行为改变为在执行执行器函数执行num次后的执行，才会真正执行函数fn</p>
</dd>
<dt><a href="#module_map">map</a> ⇒ <code>Array</code></dt>
<dd><p>map迭代函数</p>
<p>适用于各种类型的map迭代函数，对集合的每一项调用函数fn，返回函数
的返回值组成的数组</p>
</dd>
<dt><a href="#module_pull">pull</a> ⇒ <code>Array</code></dt>
<dd><p>移除数组元素</p>
<p>删除数组中所有与给定值相等的元素，给定值可以有多个，该方法会在原数组修改，
返回修改完成后的数组</p>
</dd>
<dt><a href="#module_random">random</a> ⇒ <code>Number</code></dt>
<dd><p>随机数函数</p>
<p>返回min-max之间的随机数，包括min和max，默认返回整数</p>
</dd>
<dt><a href="#module_reduce">reduce</a> ⇒ <code>any</code></dt>
<dd><p>reduce归并函数</p>
<p>适用于多种类型的归并函数，函数接受四个参数，
前一项的值，当前项的值，当前项的索引，对象本身，函数的返回值会作为第一个
参数自动传给下一项，也可以通过使函数返回false终止迭代</p>
</dd>
<dt><a href="#module_reduceRight">reduceRight</a> ⇒ <code>any</code></dt>
<dd><p>rediceRight归并函数</p>
<p>reduce函数的反向函数，从反方向开始迭代，对每一项调用函数fn，
函数fn接受4个参数，前一项的值，当前项的值，当前项的索引，对象本身，
若accumulator存在，则从第一项开始迭代，否则，从第二项开始迭代
若fn函数显式的返回false，则终止迭代，返回结果</p>
</dd>
<dt><a href="#module_remove">remove</a> ⇒ <code>Array</code></dt>
<dd><p>删除数组元素</p>
<p>删除数组中所有对函数返回True的项，返回删除的项，在原数组删除
断言函数接受三个参数，数组当前项的值，索引和数组本身</p>
</dd>
<dt><a href="#module_some">some</a> ⇒ <code>Boolean</code></dt>
<dd><p>some迭代函数</p>
<p>适用于多种类型的Some函数，对对象的每一项调用函数，若是有一项使函数返回True，
则返回True，否则返回false</p>
</dd>
<dt><a href="#module_swapIndex">swapIndex</a> ⇒ <code>Array</code> | <code>String</code></dt>
<dd><p>交换元素位置</p>
<p>交换数组或字符串元素的位置，对于数组，在数组本身修改，对于字符串，会返回新的字符串</p>
</dd>
<dt><a href="#module_throttle">throttle</a> ⇒ <code>function</code></dt>
<dd><p>节流函数</p>
</dd>
<dt><a href="#module_toCurrency">toCurrency</a> ⇒ <code>String</code></dt>
<dd><p>将一个数字转化为以逗号分隔的货币形式的字符串</p>
</dd>
<dt><a href="#module_toLower">toLower</a> ⇒ <code>any</code></dt>
<dd><p>将一个字符串或集合中的字符串转化为小写形式</p>
<p>会递归一个集合所有的深度，将它们的字符串值全部转化</p>
</dd>
<dt><a href="#module_toUpper">toUpper</a> ⇒ <code>String</code> | <code>Array</code> | <code>Object</code> | <code>Map</code></dt>
<dd><p>将字符串或一个集合中的字符串大写，</p>
<p>该方法会递归一个集合的所有深度，将集合的所有字符串转化为大写形式</p>
</dd>
<dt><a href="#module_unique">unique</a> ⇒ <code>Array</code></dt>
<dd><p>去重函数</p>
<p>数组去重，不改变原数组，返回去重后的新数组</p>
</dd>
<dt><a href="#module_upperFirst">upperFirst</a> ⇒ <code>String</code> | <code>Array</code> | <code>Object</code> | <code>Map</code></dt>
<dd><p>将字符串或一个集合中的字符串首字母大写，</p>
<p>该方法会递归一个集合的所有深度，将集合的所有字符串转化为首字母大写形式</p>
</dd>
</dl>

<a name="module_camelCase"></a>

## camelCase ⇒ <code>String</code>
驼峰化字符串函数会舍弃字符串的所有特殊字符，无论是在开头还是中间还是结尾，而在非开头处的数字或特殊字符后的字母会大写

**Returns**: <code>String</code> - 驼峰化后的字符串  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 想要驼峰化的字符串 |

**Example**  
```js
let str1 = '@!$as3gh-at^e123!@#';let str2 = 'a1b2c3';camelCase(str1); // as3GhAtE123camelCase(str2); // a1B2C3
```
<a name="module_checkedType"></a>

## checkedType ⇒ <code>String</code>
判断类型的函数函数会返回对应类型的大写形式

**Returns**: <code>String</code> - 返回一个值对应的类型的字符串  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>any</code> | 一个需要检查类型的值 |

**Example**  
```js
_.checkedType({}); //  "Object" _.checkedType([]); // "Array" _.checkedType(true); // "Boolean" _.checkedType(undefined); // "Undefined" _.checkedType(null); // "Null" _.checkedType('str'); // "String"
```
<a name="module_curry"></a>

## curry ⇒ <code>function</code>
函数柯里化的辅助函数接受一个函数fn和可选的用于函数fn的参数，返回柯里化后的函数fn，即使函数fn的参数已经满足同样会返回一个函数而不是fn调用的结果

**Returns**: <code>function</code> - 柯里化后的函数  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 想要柯里化的函数 |
| ...args | <code>any</code> | 函数fn所需要的参数 |

**Example**  
```js
function add (a, b, c, d) {     console.log(a + b + c + d); }let curried = _.curry(add, 1, 1, 1, 1);curried();  // 4let curried2 = _.curry(add);curried2(1)(1)(1)(1);  // 4curried2(1, 1)(1)(1);  // 4curried2(1, 1, 1)(1);  // 4
```
<a name="module_debounce"></a>

## debounce ⇒ <code>function</code>
创建一个防抖函数创建一个防抖函数，根据option选项对象来决定delay延时开始前或结束后调用回调函数，其中option.before决定是否在延时开始之前触发回调，若是为false，那么无论option.after为true还是false，都会在延时结束后触发回调，option.after决定是否在延时结束之后触发回调，函数返回的防抖函数拥有一个cancel方法，用来取消延时调用

**Returns**: <code>function</code> - debounced 防抖函数  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | 回调函数 |
| delay | <code>0</code> | 延时 |
| option | <code>Object</code> | 选项对象 |
| [option.before] | <code>Boolean</code> | 是否在延时开始之前触发回调 |
| [option.after] | <code>Boolean</code> | 是否在延时结束之后触发回调 |

**Example**  
```js
function go () {
        console.log('scroll');}window.addEventListener( 'scroll', _.debounce(go, 1000) );window.addEventListener( 'scroll', _.debounce(go, 1000, {before: true, after: true}) );
```
<a name="module_deepClone"></a>

## deepClone ⇒ <code>any</code>
深拷贝函数一个深拷贝函数，cloneProto参数决定是否拷贝一个对象的原型，不会忽略函数，对象的Symbol属性，但是对于Symbol属性，仍然传递的是Symbol的引用

**Returns**: <code>any</code> - 深拷贝后的对象  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>any</code> | 想要进行深拷贝的对象 |
| cloneProto | <code>Boolean</code> | 是否拷贝对象的原型 |

**Example**  
```js
let obj = {     name: 'Jack',     age: 30};let o2 = _.deepClone(obj);
```
<a name="module_every"></a>

## every ⇒ <code>Boolean</code>
every迭代函数适用于多种类型的every函数，对于对象的每个元素调用函数，若所有属性都使函数返回True则返回True，否则返回false

**Returns**: <code>Boolean</code> - 是否每个元素都对函数返回True  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | object |
| predicate | <code>function</code> | 断言函数 |

**Example**  
```js
let arr = [1, 2, 3];console.log( _.every(arr, item => item > 0) );  // true
```
<a name="module_filter"></a>

## filter ⇒ <code>Array</code>
适用于各种类型的Filter迭代函数适用于各种类型的Filter迭代函数，对于集合的每一项调用函数，返回函数返回True的项组成的数组

**Returns**: <code>Array</code> - 函数返回true的项组成的数组  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> \| <code>Number</code> | 对象 |
| cb | <code>function</code> | 对对象的元素调用的函数 |

**Example**  
```js
_.filter([1, 2, 3, 4], item => item % 2 === 0);   // [2, 4]_.filter('Jack', char => true);  // ['J', 'a', 'c', 'k']_.filter(5, n => true);   // [0, 1, 2, 3, 4];
```
<a name="module_find"></a>

## find ⇒ <code>any</code>
find迭代函数适用于多种类型的find方法，它返回第一个使断言函数返回true的项,对于Object和Map类型，find返回的将不再是项，而是键值对中的键,fromIndex为迭代的起点，对于数组来说，是其索引，对于对象Map等类型来说，是获取他们的所有键的数组的索引

**Returns**: <code>any</code> - 第一个使断言函数返回true的项  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>Object</code> | object |
| predicate | <code>function</code> | 断言函数， |
| fromIndex | <code>Number</code> | 迭代的起始索引 |

**Example**  
```js
let arr = [1, 2, 3, 4, 5, 6];console.log( _.find(arr, item => item > 3) );  // 4let obj = {a: 1, b: 2, c: 3};console.log(  _.find(obj, item => item > 2) );  // c
```
<a name="module_findRight"></a>

## findRight ⇒ <code>any</code>
find函数的反向函数从反方向开始迭代，返回第一个使函数返回True的项的值对于对象或Map，返回的将是他们的键而不是值

**Returns**: <code>any</code> - 第一个使断言函数返回true的项  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | object |
| fn | <code>function</code> | 对象每一项调用的函数 |
| fromIndex | <code>Number</code> | 迭代的起始索引 |

**Example**  
```js
let arr = [1, 2, 3, 4];console.log( _.findRight(arr, item => item > 1) ); // 4
```
<a name="module_forEach"></a>

## forEach ⇒ <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> \| <code>Number</code> \| <code>Object</code>
forEach迭代函数适用于各种类型的forEach，对集合的每一项运行函数，最终返回集合本身，可以显式的通过返回false来终止循环

**Returns**: <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> \| <code>Number</code> \| <code>Object</code> - 集合本身  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> \| <code>Number</code> \| <code>Object</code> | 对象 |
| cb | <code>function</code> | 对对象的元素调用的函数 |

**Example**  
```js
_.forEach([1, 2, 3], item => console.log(item)); 1, 2, 3_.forEach({name: 'Jack', age: 30}, value => console.log(value)); // 'Jack', 30
```
<a name="module_forEachRight"></a>

## forEachRight ⇒ <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code>
forEachRight迭代函数forEach函数的反向函数，从结尾开始迭代，可以通过返回false显式的结束迭代，返回集合本身


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 想要迭代的集合 |
| fn | <code>function</code> | 对每个元素调用的迭代函数 |

**Example**  
```js
let arr = [1, 2, 3, 4]; _.forEachRight(arr, item => console.log(item));   // 4, 3, 2, 1
```
<a name="module_isInContainer"></a>

## isInContainer ⇒ <code>Boolean</code>
判断一个元素是否在对应容器的可视区域内

**Returns**: <code>Boolean</code> - 是否在可视区域内  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Object</code> | 判断是否在容器的目标DOM元素 |
| container | <code>Object</code> | 容器DOM元素，默认为视口 |

<a name="module_limitExec"></a>

## limitExec ⇒ <code>function</code>
限制函数的执行次数可选的第三个参数isBefore默认为True，决定函数fn能够执行的次数，若是isBefore为false，则行为改变为在执行执行器函数执行num次后的执行，才会真正执行函数fn

**Returns**: <code>function</code> - 执行器函数  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 想要限制执行的函数 |
| num | <code>Number</code> | 次数 |
| isBefore | <code>Boolean</code> | 限制执行num次函数fn还是在执行num次后执行函数fn |

**Example**  
```js
function before (n) {
    console.log('只有在前四次点击才会执行我');}let button = document.querySelector('button');let exec = limitExec(before, 4);button.addEventListener('click', exec);
```
<a name="module_map"></a>

## map ⇒ <code>Array</code>
map迭代函数适用于各种类型的map迭代函数，对集合的每一项调用函数fn，返回函数的返回值组成的数组

**Returns**: <code>Array</code> - 函数的返回值组成的数组  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> \| <code>Number</code> | obj |
| fn | <code>function</code> | 迭代函数 |

**Example**  
```js
_.map(5, item => item + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]_.map([1, 2, 3, 4, 5], (item, index) => index + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
```
<a name="module_pull"></a>

## pull ⇒ <code>Array</code>
移除数组元素删除数组中所有与给定值相等的元素，给定值可以有多个，该方法会在原数组修改，返回修改完成后的数组

**Returns**: <code>Array</code> - 修改完成的数组  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | array |
| ...args | <code>any</code> | 想要删除的元素 |

**Example**  
```js
let arr = [1, 2, 3, 4, 3, 2, 6, 1, 2];_.pull(arr, 1, 2);  //  [3, 4, 3, 6]
```
<a name="module_random"></a>

## random ⇒ <code>Number</code>
随机数函数返回min-max之间的随机数，包括min和max，默认返回整数

**Returns**: <code>Number</code> - 一个数字  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | 最小值 |
| max | <code>Number</code> | 最大值 |
| floating | <code>Boolean</code> | 是否包括浮点数 |

**Example**  
```js
// 2, 5, 1, 1, 2_.forEach(5, () => {console.log( _.random(1, 5) );});
```
<a name="module_reduce"></a>

## reduce ⇒ <code>any</code>
reduce归并函数适用于多种类型的归并函数，函数接受四个参数，前一项的值，当前项的值，当前项的索引，对象本身，函数的返回值会作为第一个参数自动传给下一项，也可以通过使函数返回false终止迭代

**Returns**: <code>any</code> - 函数fn最终的返回值  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>String</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | obj |
| fn | <code>function</code> | 对目标每一项调用的函数 |
| accumulator | <code>any</code> | 初始值 |

**Example**  
```js
let o = {a: 1, b: 2, c: 3};// 6let result = _reduce(o, (cur, pre) => {     return pre + cur;});
```
<a name="module_reduceRight"></a>

## reduceRight ⇒ <code>any</code>
rediceRight归并函数reduce函数的反向函数，从反方向开始迭代，对每一项调用函数fn，函数fn接受4个参数，前一项的值，当前项的值，当前项的索引，对象本身，若accumulator存在，则从第一项开始迭代，否则，从第二项开始迭代若fn函数显式的返回false，则终止迭代，返回结果

**Returns**: <code>any</code> - 构建的最终值  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | object |
| fn | <code>function</code> | 对对象每个元素调用的函数 |
| accumulator | <code>any</code> | 初始值 |

**Example**  
```js
let arr = [0, 1, 2, 3, 4];console.log( _.reduceRight(arr, (pre, cur) => pre + cur) );  // 10
```
<a name="module_remove"></a>

## remove ⇒ <code>Array</code>
删除数组元素删除数组中所有对函数返回True的项，返回删除的项，在原数组删除断言函数接受三个参数，数组当前项的值，索引和数组本身

**Returns**: <code>Array</code> - 函数返回true的项组成的数组  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | array |
| fn | <code>function</code> | 断言函数， |

**Example**  
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];_.remove(arr);    //  [ 2, 4, 6, 8, 10 ]console.log(arr);  //  [ 1, 3, 5, 7, 9 ]
```
<a name="module_some"></a>

## some ⇒ <code>Boolean</code>
some迭代函数适用于多种类型的Some函数，对对象的每一项调用函数，若是有一项使函数返回True，则返回True，否则返回false


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 对象 |
| predicate | <code>function</code> | 断言函数 |

**Example**  
```js
let arr = [1, 2, 3, 4];console.log( _.some(arr, item => item > 3) );  // true
```
<a name="module_swapIndex"></a>

## swapIndex ⇒ <code>Array</code> \| <code>String</code>
交换元素位置交换数组或字符串元素的位置，对于数组，在数组本身修改，对于字符串，会返回新的字符串


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>String</code> | 数组或字符串 |
| i | <code>Number</code> | 索引 |
| j | <code>Number</code> | 索引 |

**Example**  
```js
_.swapIndex([1, 2], 0, 1); // [2, 1]_.swapIndex('abcd', 0, 3); // dbca
```
<a name="module_throttle"></a>

## throttle ⇒ <code>function</code>
节流函数

**Returns**: <code>function</code> - 节流后的函数  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 事件处理函数 |
| time | <code>Numer</code> | 延时 |

**Example**  
```js
function go () {
        console.log('scroll');}window.addEventListener( 'scroll', _.throttle(go, 1000) );
```
<a name="module_toCurrency"></a>

## toCurrency ⇒ <code>String</code>
将一个数字转化为以逗号分隔的货币形式的字符串

**Returns**: <code>String</code> - 货币形式的字符串  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | 一个数字 |

**Example**  
```js
//  123,456,789.123456console.log( toCurrency(123456789.123456) );
```
<a name="module_toLower"></a>

## toLower ⇒ <code>any</code>
将一个字符串或集合中的字符串转化为小写形式会递归一个集合所有的深度，将它们的字符串值全部转化


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> \| <code>Object</code> \| <code>Map</code> \| <code>Array</code> | 想要小写的字符串或集合 |

**Example**  
```js
let arr = ['AAA', ['BBB', ['CCC']]];//  ['aaa', ['bbb', ['ccc']]];console.log(_.toLower(arr));
```
<a name="module_toUpper"></a>

## toUpper ⇒ <code>String</code> \| <code>Array</code> \| <code>Object</code> \| <code>Map</code>
将字符串或一个集合中的字符串大写，该方法会递归一个集合的所有深度，将集合的所有字符串转化为大写形式

**Returns**: <code>String</code> \| <code>Array</code> \| <code>Object</code> \| <code>Map</code> - 转化完成的字符串或集合  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> \| <code>Array</code> \| <code>Object</code> \| <code>Map</code> | 想要大写的字符串或集合 |

**Example**  
```js
let arr = ['aaa', {name: 'davi'}, 20];// ['AAA', {name: 'DAVI'}, 20]console.log(_.toUpper(['aaa', { name: 'davi' }, 20]));  
```
<a name="module_unique"></a>

## unique ⇒ <code>Array</code>
去重函数数组去重，不改变原数组，返回去重后的新数组

**Returns**: <code>Array</code> - 去重后的数组  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | array |

**Example**  
```js
let arr = [1, 2, 3, 4, 1, 2, 3, 5];_.unique(arr);  // [1, 2, 3, 4, 5]
```
<a name="module_upperFirst"></a>

## upperFirst ⇒ <code>String</code> \| <code>Array</code> \| <code>Object</code> \| <code>Map</code>
将字符串或一个集合中的字符串首字母大写，该方法会递归一个集合的所有深度，将集合的所有字符串转化为首字母大写形式

**Returns**: <code>String</code> \| <code>Array</code> \| <code>Object</code> \| <code>Map</code> - 转化完成的字符串或集合  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> \| <code>Array</code> \| <code>Object</code> \| <code>Map</code> | 想要首字母大写的字符串或集合 |

**Example**  
```js
let arr = ['aaa', {name: 'davi'}, 20];// ['Aaa', {name: 'Davi'}, 20];console.log(_.upperFirst(arr));
```
