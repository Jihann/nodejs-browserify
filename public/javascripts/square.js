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