/*
  Generator 함수 생성자
*/ 
let GenConst = Object.getPrototypeOf(function*(){}).constructor; // 이름 없는 함수 생성
let Sports = new GenConst( // 이름 없는 함수의 생성자로 함수를 정의
    "one", "two", 
    "console.log('function block'); yield one + two"
);
let genObj = Sports(3,4); 
console.log(genObj.next()); 