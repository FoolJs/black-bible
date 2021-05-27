
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
import _ from 'black-bible';

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
<dt><a href="#module_add">add</a> ⇒ <code>Number</code></dt>
<dd><p>求所有参数的和</p>
<p>对于参数列表中的任何类型，都会尝试相加，所以可能会有强制类型转换</p>
</dd>
<dt><a href="#module_after">after</a> ⇒ <code>function</code></dt>
<dd><p>函数在count次后执行</p>
<p>限制函数在触发多少次后执行</p>
</dd>
<dt><a href="#module_before">before</a> ⇒ <code>function</code></dt>
<dd><p>限制函数执行的次数</p>
<p>限制函数只能执行多少次，返回一个执行器函数，用来执行函数，次数到之后，再次执行函数
会失效，</p>
</dd>
<dt><a href="#module_camelCase">camelCase</a> ⇒ <code>String</code></dt>
<dd><p>驼峰化字符串</p>
<p>函数会舍弃字符串的所有特殊字符，无论是在开头还是中间还是结尾，而在非开头处的数字或特殊字符
后的字母会大写</p>
</dd>
<dt><a href="#module_checkedType">checkedType</a> ⇒ <code>String</code></dt>
<dd><p>判断类型的函数</p>
<p>该函数通过Object.prototype.toString方法来判断，所以
若是重写了该方法，函数可能会失效，函数会返回对应类型的大写形式，</p>
</dd>
<dt><a href="#module_compact">compact</a> ⇒ <code>Array</code></dt>
<dd><p>获取真值数组</p>
<p>返回一个新数组，包含原数组的所有真值，
假值为：undefined, NaN, 0, false, null</p>
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
<dt><a href="#module_delay">delay</a> ⇒ <code>Object</code></dt>
<dd><p>延时函数</p>
<p>延时函数fn的执行wait毫秒，会返回一个定时器ID</p>
</dd>
<dt><a href="#module_divide">divide</a> ⇒ <code>Boolean</code></dt>
<dd><p>求商</p>
</dd>
<dt><a href="#module_divideBy">divideBy</a> ⇒ <code>Number</code></dt>
<dd><p>求商</p>
<p>接受一个函数作为第二参数，对集合内每个元素调用，用来决定求值的标准</p>
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
<dt><a href="#module_isArray">isArray</a></dt>
<dd><p>是否是数组类型</p>
<p>使用Array的isArray方法来进行检查</p>
</dd>
<dt><a href="#module_isBigInt">isBigInt</a> ⇒ <code>Boolean</code></dt>
<dd><p>值是否是BigInt类型</p>
</dd>
<dt><a href="#module_isBoolean">isBoolean</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是布尔值</p>
</dd>
<dt><a href="#module_isDate">isDate</a> ⇒ <code>Boolean</code></dt>
<dd><p>值是否是Date</p>
</dd>
<dt><a href="#module_isError">isError</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是Error类型</p>
</dd>
<dt><a href="#module_isFalseValue">isFalseValue</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是假植</p>
<p>在这里，假值的概念为值等于 undefined ，null ，false ，0</p>
</dd>
<dt><a href="#module_isFinite">isFinite</a> ⇒ <code>Boolean</code></dt>
<dd><p>值是否是有限数字</p>
</dd>
<dt><a href="#module_isFunction">isFunction</a> ⇒ <code>Boolean</code></dt>
<dd><p>值是否是函数</p>
</dd>
<dt><a href="#module_isInContainer">isInContainer</a> ⇒ <code>Boolean</code></dt>
<dd><p>判断一个元素是否在对应容器的可视区域内</p>
</dd>
<dt><a href="#module_isMap">isMap</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否为Map</p>
</dd>
<dt><a href="#module_isNaN">isNaN</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是NaN</p>
<p>与Javascript自带的isNaN不同，该函数只会对NaN值返回true</p>
</dd>
<dt><a href="#module_isNodeEnv">isNodeEnv</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是Node环境</p>
</dd>
<dt><a href="#module_isNull">isNull</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否等于Null</p>
</dd>
<dt><a href="#module_isNumber">isNumber</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是数字</p>
</dd>
<dt><a href="#module_isObject">isObject</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是对象类型</p>
<p>对于任何对象类型包括函数返回True，对于null返回false和undefined返回false</p>
</dd>
<dt><a href="#module_isObjectLike">isObjectLike</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是类对象</p>
<p>跟isObject基本相同，只是会对函数返回false，也就是说对
一个非null非function对象返回True</p>
</dd>
<dt><a href="#module_isPlainObject">isPlainObject</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否为普通对象</p>
<p>一个普通对象为直接通过Object构造函数或对象字面量创建的对象,
一个对象若是继承了其他对象也算是普通对象</p>
</dd>
<dt><a href="#module_isRegExp">isRegExp</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是RegExp</p>
</dd>
<dt><a href="#module_isSet">isSet</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是Set</p>
</dd>
<dt><a href="#module_isString">isString</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查是否是字符串</p>
</dd>
<dt><a href="#module_isSymbol">isSymbol</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否是Symbol</p>
</dd>
<dt><a href="#module_isTrueValue">isTrueValue</a> ⇒ <code>Boolean</code></dt>
<dd><p>值是否是真值</p>
<p>在这里，真值的概念为不等于 undefined ，null ，0 ，false，</p>
</dd>
<dt><a href="#module_isUndefined">isUndefined</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否是Undefined</p>
</dd>
<dt><a href="#module_isWeakMap">isWeakMap</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否是WeakMap</p>
</dd>
<dt><a href="#module_isWeakSet">isWeakSet</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查值是否是WeakSet</p>
</dd>
<dt><a href="#module_isWindow">isWindow</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查当前宿主环境是否为window</p>
</dd>
<dt><a href="#module_map">map</a> ⇒ <code>Array</code></dt>
<dd><p>map迭代函数</p>
<p>适用于各种类型的map迭代函数，对集合的每一项调用函数fn，返回函数
的返回值组成的数组</p>
</dd>
<dt><a href="#module_max">max</a> ⇒ <code>Number</code> | <code>String</code></dt>
<dd><p>集合的最大值</p>
</dd>
<dt><a href="#module_maxBy">maxBy</a> ⇒ <code>any</code></dt>
<dd><p>最大值</p>
<p>接受一个函数作为第二参数，用来决定求值的标准</p>
</dd>
<dt><a href="#module_min">min</a> ⇒ <code>Number</code> | <code>String</code></dt>
<dd><p>求最小值</p>
</dd>
<dt><a href="#module_minBy">minBy</a> ⇒ <code>any</code></dt>
<dd><p>最小值</p>
<p>接受一个函数作为第二参数，用来决定求值的标准</p>
</dd>
<dt><a href="#module_multiply">multiply</a> ⇒ <code>Number</code></dt>
<dd><p>求集合的乘积</p>
</dd>
<dt><a href="#module_multiplyBy">multiplyBy</a> ⇒ <code>Number</code></dt>
<dd><p>集合的乘积</p>
<p>接受一个函数作为第二参数，用来决定求值的标准</p>
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
<dt><a href="#module_sample">sample</a> ⇒ <code>any</code></dt>
<dd><p>随机获取集合的某一项的值</p>
<p>随机获取集合的某一项，对于Object和Map类型来说，获取得将会是他们的
Key，而不是Value</p>
</dd>
<dt><a href="#module_sampleSize">sampleSize</a> ⇒ <code>Array</code></dt>
<dd><p>随机抽取一个集合的num个元素</p>
<p>随机抽取一个集合的num个元素，适用于多种类型，若是num大于集合内元素的数量，会随机抽取
集合所有的元素，会将抽取到的元素放到一个数组内，</p>
</dd>
<dt><a href="#module_shuffle">shuffle</a> ⇒ <code>Array</code> | <code>Object</code> | <code>Map</code> | <code>Set</code> | <code>String</code></dt>
<dd><p>打乱集合的顺序</p>
<p>打乱一个集合的顺序，不会改变原集合，而是返回一个新集合，</p>
</dd>
<dt><a href="#module_size">size</a> ⇒ <code>Number</code></dt>
<dd><p>一个集合内元素的数量</p>
<p>对于数组和字符串，为他们的length属性，其他类型的对象，为对象内所有
的可迭代属性的数量</p>
</dd>
<dt><a href="#module_some">some</a> ⇒ <code>Boolean</code></dt>
<dd><p>some迭代函数</p>
<p>适用于多种类型的Some函数，对对象的每一项调用函数，若是有一项使函数返回True，
则返回True，否则返回false</p>
</dd>
<dt><a href="#module_subtract">subtract</a> ⇒ <code>Number</code></dt>
<dd><p>集合内所有元素的差</p>
</dd>
<dt><a href="#module_subtractBy">subtractBy</a> ⇒ <code>Number</code></dt>
<dd><p>集合内元素的差</p>
<p>接受一个函数作为第二参数，对集合内每个元素调用，用来决定求值的标准</p>
</dd>
<dt><a href="#module_sum">sum</a> ⇒ <code>Number</code></dt>
<dd><p>集合内所有值的和</p>
</dd>
<dt><a href="#module_sumBy">sumBy</a> ⇒ <code>Number</code></dt>
<dd><p>集合内元素的和</p>
<p>接受一个函数作为第二参数，用来决定求值的标准</p>
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
<dt><a href="#module_withOut">withOut</a> ⇒ <code>Array</code></dt>
<dd><p>不改变原数组，返回一个去除给定值的新数组</p>
<p>返回一个新数组，其中包含所有不等于value的值</p>
</dd>
</dl>

<a name="module_add"></a>

## add ⇒ <code>Number</code>
求所有参数的和对于参数列表中的任何类型，都会尝试相加，所以可能会有强制类型转换


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | 参数 |

**Example**  
```js
// 'abc'console.log(_.add('a', 'b', 'c'))// 6console.log(_.add(1, 2, 3))
```
<a name="module_after"></a>

## after ⇒ <code>function</code>
函数在count次后执行限制函数在触发多少次后执行

**Returns**: <code>function</code> - 执行器函数  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | 想要限制执行的函数 |
| count | <code>Number</code> |  | 次数 |
| [point] | <code>any</code> | <code>globalThis</code> | 函数执行时环境，默认为globalThis |

**Example**  
```js
function after (n) {
    console.log('只有在点击四次后才会执行我');}let button = document.querySelector('button');let exec = _.after(after, 4);button.addEventListener('click', exec);
```
<a name="module_before"></a>

## before ⇒ <code>function</code>
限制函数执行的次数限制函数只能执行多少次，返回一个执行器函数，用来执行函数，次数到之后，再次执行函数会失效，

**Returns**: <code>function</code> - 执行器函数  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | 想要限制执行次数的函数 |
| count | <code>Number</code> |  | 执行次数 |
| [point] | <code>any</code> | <code>globalThis</code> | 函数运行时所在环境，默认为globalThis |

**Example**  
```js
function before (n) {
    console.log('只有在前四次点击才会执行我');}let button = document.querySelector('button');let exec = _.before(before, 4);button.addEventListener('click', exec);
```
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
判断类型的函数该函数通过Object.prototype.toString方法来判断，所以若是重写了该方法，函数可能会失效，函数会返回对应类型的大写形式，

**Returns**: <code>String</code> - 返回一个值对应的类型的字符串  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>any</code> | 一个需要检查类型的值 |

**Example**  
```js
_.checkedType({}); //  "Object" _.checkedType([]); // "Array" _.checkedType(true); // "Boolean" _.checkedType(undefined); // "Undefined" _.checkedType(null); // "Null" _.checkedType('str'); // "String"
```
<a name="module_compact"></a>

## compact ⇒ <code>Array</code>
获取真值数组返回一个新数组，包含原数组的所有真值，假值为：undefined, NaN, 0, false, null

**Returns**: <code>Array</code> - 数组中的真值元素组成的数组  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | array |

**Example**  
```js
let arr = [0, 1, false, 2, null, '', 3, NaN, 4, undefined, 5];// [1, 2, 3, 4, 5];console.log( _.compact(arr) );
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
<a name="module_delay"></a>

## delay ⇒ <code>Object</code>
延时函数延时函数fn的执行wait毫秒，会返回一个定时器ID

**Returns**: <code>Object</code> - 定时器ID  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | 想要延时的函数 |
| wait | <code>Number</code> |  | 延时 |
| args | <code>Array</code> |  | 函数fn需要的参数，需要放到一个数组里面 |
| [point] | <code>any</code> | <code>globalThis</code> | 函数fn执行时环境，默认为globalThis |

**Example**  
```js
let obj = {     name: 'Sun XiaoChuan',     age: 6,     introduction() {     console.log(`My name is ${this.name} I'm ${this.age} years old`)     }}// My name is sun Xiaochuan. I'm 6 years oldlet timerId = delay(obj.introduction, 1000, [], obj);
```
<a name="module_divide"></a>

## divide ⇒ <code>Boolean</code>
求商


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |

**Example**  
```js
// 2console.log(_.divide([4, 2]));
```
<a name="module_divideBy"></a>

## divideBy ⇒ <code>Number</code>
求商接受一个函数作为第二参数，对集合内每个元素调用，用来决定求值的标准


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |
| iterator | <code>function</code> | 迭代函数 |

**Example**  
```js
let arr = [{age: 30},{name: 'xxx'},{age: 30}];let arrf = (o) => o.age;// 1console.log(_.divideBy(arr , arrf))
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
<a name="module_isArray"></a>

## isArray
是否是数组类型使用Array的isArray方法来进行检查


| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | 要检查的值 |

**Example**  
```js
// true_.isArray([]);
```
<a name="module_isBigInt"></a>

## isBigInt ⇒ <code>Boolean</code>
值是否是BigInt类型


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
let bigInt1 = 123n,     bigInt2 = BigInt(456),     bigInt3 = Object(789n);// trueconsole.log( isBigInt(bigInt1) );// trueconsole.log( isBigInt(bigInt2) );// trueconsole.log( isBigInt(bigInt3) );
```
<a name="module_isBoolean"></a>

## isBoolean ⇒ <code>Boolean</code>
检查是否是布尔值


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// true_.isBoolean(true)// true_.isBoolean(false)
```
<a name="module_isDate"></a>

## isDate ⇒ <code>Boolean</code>
值是否是Date


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

<a name="module_isError"></a>

## isError ⇒ <code>Boolean</code>
是否是Error类型


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// trueconsole.log(_.isError(new Error()))
```
<a name="module_isFalseValue"></a>

## isFalseValue ⇒ <code>Boolean</code>
检查是否是假植在这里，假值的概念为值等于 undefined ，null ，false ，0


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// falseconsole.log( _.isFalseValue(0) );console.log( _.isFalseValue(false) );console.log( _.isFalseValue(null) );console.log( _.isFalseValue(undefined) );
```
<a name="module_isFinite"></a>

## isFinite ⇒ <code>Boolean</code>
值是否是有限数字


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// trueconsole.log( _.isFinite(100) );// falseconsole.log( _.isFinite(1e10000) );
```
<a name="module_isFunction"></a>

## isFunction ⇒ <code>Boolean</code>
值是否是函数


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// trueconsole.log(_.isFunction(function f(){}))
```
<a name="module_isInContainer"></a>

## isInContainer ⇒ <code>Boolean</code>
判断一个元素是否在对应容器的可视区域内

**Returns**: <code>Boolean</code> - 是否在可视区域内  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Object</code> | 判断是否在容器的目标DOM元素 |
| container | <code>Object</code> | 容器DOM元素，默认为视口 |

<a name="module_isMap"></a>

## isMap ⇒ <code>Boolean</code>
检查值是否为Map


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// trueconsole.log(_.isMap(new Map()))
```
<a name="module_isNaN"></a>

## isNaN ⇒ <code>Boolean</code>
检查是否是NaN与Javascript自带的isNaN不同，该函数只会对NaN值返回true


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// true_.isNaN(NaN);// false_.isNaN('AAA');
```
<a name="module_isNodeEnv"></a>

## isNodeEnv ⇒ <code>Boolean</code>
是否是Node环境

<a name="module_isNull"></a>

## isNull ⇒ <code>Boolean</code>
检查值是否等于Null


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// trueconsole.log(_.isNull(null));
```
<a name="module_isNumber"></a>

## isNumber ⇒ <code>Boolean</code>
检查是否是数字


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// true_.isNumber(new Number(100));// true_.isNumber(100);
```
<a name="module_isObject"></a>

## isObject ⇒ <code>Boolean</code>
检查是否是对象类型对于任何对象类型包括函数返回True，对于null返回false和undefined返回false


| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | 想要检查的值 |

**Example**  
```js
// true_.isObject([])// false_.isObject(null)// false_.isObject(undefined)
```
<a name="module_isObjectLike"></a>

## isObjectLike ⇒ <code>Boolean</code>
检查是否是类对象跟isObject基本相同，只是会对函数返回false，也就是说对一个非null非function对象返回True


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// false_.isObjectLike(function f () {})
```
<a name="module_isPlainObject"></a>

## isPlainObject ⇒ <code>Boolean</code>
检查值是否为普通对象一个普通对象为直接通过Object构造函数或对象字面量创建的对象,一个对象若是继承了其他对象也算是普通对象


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
let o1 = {},     o2 = {};Object.setPrototypeOf(o1, o2);// trueconsole.log(_.isPlainObject(o1))// trueconsole.log(_.isPlainObject(o2))
```
<a name="module_isRegExp"></a>

## isRegExp ⇒ <code>Boolean</code>
是否是RegExp


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 检查的值 |

**Example**  
```js
// trueconsole.log(_.isRegExp(new RegExp()))
```
<a name="module_isSet"></a>

## isSet ⇒ <code>Boolean</code>
是否是Set


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// trueconsole.log(_.isSet(new Set()))
```
<a name="module_isString"></a>

## isString ⇒ <code>Boolean</code>
检查是否是字符串


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// true_.isString('aaa')// true_.isString(new String())
```
<a name="module_isSymbol"></a>

## isSymbol ⇒ <code>Boolean</code>
检查值是否是Symbol


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// trueconsole.log(_.isSymbol( Symbol("foo")))// trueconsole.log(_.isSymbol(Object(Symbol("foo"))))
```
<a name="module_isTrueValue"></a>

## isTrueValue ⇒ <code>Boolean</code>
值是否是真值在这里，真值的概念为不等于 undefined ，null ，0 ，false，


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// falseconsole.log(_.isTrueValue(undefined));// falseconsole.log(_.isTrueValue(0));// falseconsole.log(_.isTrueValue(null));// falseconsole.log(_.isTrueValue(false));// trueconsole.log(_.isTrueValue('0'));
```
<a name="module_isUndefined"></a>

## isUndefined ⇒ <code>Boolean</code>
检查值是否是Undefined


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要检查的值 |

**Example**  
```js
// trueconsole.log( _.isUndefined(Undefined) );
```
<a name="module_isWeakMap"></a>

## isWeakMap ⇒ <code>Boolean</code>
检查值是否是WeakMap


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// trueconsole.log(_.isWeakMap(new WeakMap()))
```
<a name="module_isWeakSet"></a>

## isWeakSet ⇒ <code>Boolean</code>
检查值是否是WeakSet


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 想要检查的值 |

**Example**  
```js
// trueconsole.log(_.isWeakSet(new WeakSet()))
```
<a name="module_isWindow"></a>

## isWindow ⇒ <code>Boolean</code>
检查当前宿主环境是否为window

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
<a name="module_max"></a>

## max ⇒ <code>Number</code> \| <code>String</code>
集合的最大值


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |

**Example**  
```js
// 3console.log(_.max([1, 2, 3]))// cconsole.log(_.max({'a', 'b', 'c'}))
```
<a name="module_maxBy"></a>

## maxBy ⇒ <code>any</code>
最大值接受一个函数作为第二参数，用来决定求值的标准


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |
| iterator | <code>function</code> | 迭代函数 |

**Example**  
```js
let arr = [{age: 30},{name: 'xxx'},{age: 20}];let arrf = (o) => o.age;// {age: 30}console.log(_.maxBy(arr, arrf));
```
<a name="module_min"></a>

## min ⇒ <code>Number</code> \| <code>String</code>
求最小值


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>Object</code> | 集合 |

**Example**  
```js
// 0console.log(_.min([1, 2, 3, 0]))
```
<a name="module_minBy"></a>

## minBy ⇒ <code>any</code>
最小值接受一个函数作为第二参数，用来决定求值的标准


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |
| iterator | <code>function</code> | 迭代函数 |

**Example**  
```js
let arr = [{age: 30},{name: 'xxx'},{age: 20}];let arrf = (o) => o.age;// {age: 20}console.log(_.minBy(arr, arrf));
```
<a name="module_multiply"></a>

## multiply ⇒ <code>Number</code>
求集合的乘积


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |

**Example**  
```js
// 24console.log(_.multiply([2, 3, 4]))
```
<a name="module_multiplyBy"></a>

## multiplyBy ⇒ <code>Number</code>
集合的乘积接受一个函数作为第二参数，用来决定求值的标准


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>Object</code> | 集合 |
| iterator | <code>function</code> | 迭代函数 |

**Example**  
```js
let arr = [{age: 30},{name: 'xxx'},{age: 20}];let arrf = (o) => o.age;// 600console.log(_.multiplyBy(arr, arrf))
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
<a name="module_sample"></a>

## sample ⇒ <code>any</code>
随机获取集合的某一项的值随机获取集合的某一项，对于Object和Map类型来说，获取得将会是他们的Key，而不是Value

**Returns**: <code>any</code> - 集合的某一项  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> | 一个集合 |

**Example**  
```js
let arr = [1, 2, 3, 4];// 3, 2, 2, 3, 3, 1, 2, 4, 4, 1_.forEach(10, () => {     console.log( _.sample(arr) )})
```
<a name="module_sampleSize"></a>

## sampleSize ⇒ <code>Array</code>
随机抽取一个集合的num个元素随机抽取一个集合的num个元素，适用于多种类型，若是num大于集合内元素的数量，会随机抽取集合所有的元素，会将抽取到的元素放到一个数组内，

**Returns**: <code>Array</code> - 抽取的元素组成的数组  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| <code>Object</code> \| <code>String</code> | 想要随机抽取的对象 |
| num | <code>Number</code> | 想要获得的元素数量 |

**Example**  
```js
let arr = [1, 2, 3, 4];// [3, 1]console.log(_.sampleSize(arr, 2));// [2, 4, 3, 1]console.log(_.sampleSize(arr, 100));
```
<a name="module_shuffle"></a>

## shuffle ⇒ <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code>
打乱集合的顺序打乱一个集合的顺序，不会改变原集合，而是返回一个新集合，

**Returns**: <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> - 打乱顺序后的集合  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> \| <code>String</code> | 想要打乱顺序的集合 |

**Example**  
```js
let arr = [1, 2, 3, 4];// [2, 4, 3, 1]console.log(_.shuffle(arr));let str = 'ABCD';// 'ADBC';console.log(_.shuffle(str));
```
<a name="module_size"></a>

## size ⇒ <code>Number</code>
一个集合内元素的数量对于数组和字符串，为他们的length属性，其他类型的对象，为对象内所有的可迭代属性的数量

**Returns**: <code>Number</code> - 集合内元素的数量  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> \| <code>String</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 一个集合 |

**Example**  
```js
let o = {name: 'Davi', age: 22};// 2console.log(_.size(o));
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
<a name="module_subtract"></a>

## subtract ⇒ <code>Number</code>
集合内所有元素的差


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |

**Example**  
```js
// 0console.log（_.subtract([3, 2, 1]))
```
<a name="module_subtractBy"></a>

## subtractBy ⇒ <code>Number</code>
集合内元素的差接受一个函数作为第二参数，对集合内每个元素调用，用来决定求值的标准


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |
| iterator | <code>function</code> | 迭代函数 |

**Example**  
```js
let obj = {name: [1, 2, 3],age: [4, 5, 6],color: [7, 8, 9]};let objf = (o) => o[0];// -10console.log(_.subtractBy(obj, objf));let arr = [{age: 30},{name: 'xxx'},{age: 20}];let arrf = (o) => o.age;// 10console.log(_.subtractBy(arr, arrf));
```
<a name="module_sum"></a>

## sum ⇒ <code>Number</code>
集合内所有值的和


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 集合 |

**Example**  
```js
// 6console.log(_.sum([1, 2, 3]))
```
<a name="module_sumBy"></a>

## sumBy ⇒ <code>Number</code>
集合内元素的和接受一个函数作为第二参数，用来决定求值的标准


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>Map</code> \| <code>Set</code> | 一个集合 |
| iterator | <code>function</code> | 用来迭代的函数 |

**Example**  
```js
let arr = [{age: 30},{name: 'xxx'},{age: 20}];let arrf = (o) => o.age;// 50console.log(_.sumBy(arr, arrf))
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
<a name="module_withOut"></a>

## withOut ⇒ <code>Array</code>
不改变原数组，返回一个去除给定值的新数组返回一个新数组，其中包含所有不等于value的值


| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | array |
| ...values | <code>any</code> | 想要移除的值 |

**Example**  
```js
let arr = [1, 1, 0, 2, 3 ,4 ,5 ,3, 6];// [0, 2, 4, 5, 6]console.log( _.withOut(arr, 1, 3) );
```
