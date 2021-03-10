/*기존 자바스크립트  function 사용방법*/

var es5 = function(a, b) {
    return a + b;
}

var sum = es5(1,2);
console.log(sum);

/* Es6 추가된 arrow function */
var es6 = (a,b) /*파라미터*/ => {
    return one + two;  /*함수 내용*/ 
}
var result = es6(1,2);
console.log(result);

/*파라미터가 없는  형태의 함수 작성*/
var noParam = () => 3+4;
var result = noParam();
console.log(result);
-

