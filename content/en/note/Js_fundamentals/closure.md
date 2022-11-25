---
title: "函数闭包与回调"
# date: 2020-04-24T16:40:00+01:00
type: docs
weight: 10
# description: Resources typically useful in the later stages of development
# aliases: ["/docs/community/"] 
# tags:
# - Software Architect
# - v6
---

## 一等公民(First Class Citizens)

- 函数可以赋值给变量  `var stuff = function() {}`
    
- 函数作为函数形参
- 函数作为函数的返回值

## 闭包的解释

> 🧑🏻‍💻 A closure is when an outer function returns an inner function, the inner function is then executed in a different scope, and the inner function continues to maintain access to the outer function's variables, even though the outer function no longer exists.



```javascript
funcion callMeMaybe() {
	setTimeout(function() {
		console.log(calMe);
	}, 4000);
	const callMe = 'Hi! I am now here!';
}
```

```javascript
function compute(type, a, b) {
	compute.plus = function(a,b) {
        return a+b;
    }
    compute.minus = function(a,b) {
        return a-b;
    }
    compute.div = function(a,b) {
        return a/b;
    }
    compute.mul = function(a,b) {
        return a*b;
    }
    return compute[type](a,b);
}
```

## 闭包的好处

```javascript
function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

// but i dont want to pollute the global namespace..
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log('created Again!')
  return function(item) {
    return bigArray[item]
  }
}
```

`heavyDuty` 每调用一次就会打印一次, `getHeavyDuty` 只会调用一次

## 闭包模拟私有化(encapsulation)

- 两种写法(仅仅对外暴露出方法，外部无法访问其变量)
<table>
<tr>
<td>

```javascript
var Compute = (function () {
    var a = 100;

    class Compute {
        add(b) {
            return a + b;
        }
    }
    return Compute;
})();

var c = new Compute();
console.log(c.a);       // undefined
console.log(c.add(200)) //300
```
</td>
<td>

```javascript
;(function () {
    var a = 100;

		function Compute() {};
		Compute.prototype.add = function(b) {
			return a + b;
		}
    
    window.Compute = Compute;
})();

var c = new Compute();
console.log(c.a);       // undefined
console.log(c.add(200)) //300
```
</td>
</tr>
</table>

- 内部用关键字定义变量
<table>
<tr>
<td>

```javascript
function Comput() {
	var a = 100;
	this.add = function(b) {
		return a+b;
	}
}
var c = new Comput();
console.log(c.a);//undefined
```
</td>
<td>

```javascript
function Comput() {
	this.a = 100;
	this.add = function(b) {
		return a+b;
	}
}
var c = new Comput();
console.log(c.a);//100
```
</td>
</tr>
</table>


## Example: Using a Closure in an init function to ensure that the function is only executed once

```javascript
const init = () => {
  let initialized = false;

  return () => {
    if (initialized) {
      return console.warn('⚠️ init function already called, not initializing');
    }

    initialized = true;
    return console.info('initialized 🚀');
	 };
};
const initialize = init();

initialize();
initialize();
initialize();
```

## Reference

[Javascript Closures Made Easy](https://www.humankode.com/javascript/javascript-closures-made-easy/)