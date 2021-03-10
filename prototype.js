
/*Js는 class 개념이 없어  기존의 객체를 복사하여 새로운 객체를 생성한다
  = 프로토 타입의 개념 */ 

function Person(){}

var kim = new Person();
var Lee = new Person();

Person.prototype.getType = function(){
    return "인간";
}; 

console.log(kim.getType());
console.log(Lee.getType());