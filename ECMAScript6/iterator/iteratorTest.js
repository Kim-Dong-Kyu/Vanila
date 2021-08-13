var testArr = [1,2,3,4,5];
var iteratorArr = testArr[Symbol.iterator]();

console.log(iteratorArr.next().value);
console.log(iteratorArr.next().value);
console.log(iteratorArr.next().value);
console.log(iteratorArr.next().value);
console.log(iteratorArr.next().value);
console.log(iteratorArr.next().value);  // undefined 출력





