(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by JBH on 2015/5/12.
 */

module.exports = function(num1, num2) {
    console.log('----------------first---------------');
    return num1 * num2;
};
},{}],2:[function(require,module,exports){
/**
 * Created by JBH on 2015/5/12.
 */

//导入文件
var multiply = require('./multiply');

//导出方法<计算平方根>
module.exports = function(num) {
    console.log('-------------second----------------');
    return multiply(num, num);
};
},{"./multiply":1}],3:[function(require,module,exports){
/**
 * Created by JBH on 2015/5/12.
 */

var square = require('./square');

console.log('-------------------count two num square-------------------');
console.log(square(25));
},{"./square":2}]},{},[3]);
