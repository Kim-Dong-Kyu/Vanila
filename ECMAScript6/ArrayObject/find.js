
/*find 안 콜백함수에서 true 를 반환하면 엘리먼트 값을 반환한다*/ 
var result = [1,2,3].find((value, index, allDate) => value === 2 );
console.log(result);

result = [1,2,1].find(function(value, index, allDate){
    return value === 1  && value === this.key;
}, {key : 1});
console.log(result);

/* findindex() 배열 인덱스*/

let arrayIndex = [10,20,30].findIndex((value, index, allData)=> value === 20);
console.log(arrayIndex);

let arrayIndex2 = [10,20,30].findIndex((value, index, allData) => value ===77);
console.log(arrayIndex2);
/* 요소가 없을때는 -1을 반환*/

let arrayIndex3 = [10,20,30].findIndex(function(value, index, allData){
    return value === 30 && value === this.check; 
}, {check : 30}); 
console.log(arrayIndex3);
// 2를 반환  


