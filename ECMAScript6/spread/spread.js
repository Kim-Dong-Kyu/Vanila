/*spread 연산자 기본 사용법*/ 

let arrOne = [11,12];
let arrTwo = [21,22];

let spreadObj1 = [...arrOne, ...arrTwo, 31,32]; 
console.log(spreadObj1); 
console.log(spreadObj1.length);

/*spread  연산자 문자열 전개 */

let spreadObj2 = [..."music"];
console.log(spreadObj2);
console.log(spreadObj2.length);
