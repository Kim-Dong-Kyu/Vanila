
let values = [10,20,30];
let iterator = values.entries();
/* 
   배열이  {key : value} 형태가 되며 배열의 인덱스가 키가 되고
   배열의 엘리먼트가 value 가 된다\
*/
console.log(iterator.next());

for(var [key, value] of iterator){
    console.log(key : value);
}

/*========= key, value 이터레이터 오브젝트 =========*/

// key 배열 생성  key, value 같이 작성하면 타입 에러 반환
let iterator2 = [10,20,30].keys();
for (var key of iterator2){
    console.log(key, ":", iterator2[key]);
}

// value 값을 가지느 이터레이터 오브젝트 생성 ㅋㅌ

let iterator3 = [10,20,30].values();
console.log(iterator3.next());







