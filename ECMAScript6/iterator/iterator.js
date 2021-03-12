let arrayObj = [1,2];
let iteratorObj = arrayObj[Symbol.iterator]();
console.log("1 :", iteratorObj);

console.log("2 :", iteratorObj.next());
console.log("3 :", iteratorObj.next().value);  /*값을 출력*/ 
console.log("4 :", iteratorObj.next().done);  /* 더이상 반복이 지속될 수 있는지 여부*/ 
