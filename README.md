
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

