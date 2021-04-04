let one = [1,2,3];
console.log (one.fill(7));
/*배열 전체  요소를 7로 변경*/ 

let two =[1,2,3,4,5]
console.log(two.fill(7,1));
/*배열읰 1번 인덱스부터 끝까지 7로 변경*/

let three = [1,2,3,4,5];
console.log(three.fill(7,1,3));
/*배열의 1번 인데스 부터 3 직전 인덱스(2) 까지 7로 변경*/