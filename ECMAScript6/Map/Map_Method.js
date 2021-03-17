/*set() - key,value settings*/ 
const newMap = new Map();
newMap.set("one", 100); //set() = key, value setting
newMap.set("two", 200); //set() = key, value setting
newMap.set("three", 300); //set() = key, value setting
console.log(newMap.size);  

for(var element of newMap){
    console.log(element);
}  

/*get() - 해당 키의 value를 반환*/

const newMap2 = new Map();
newMap2.set("one",100);
console.log(newMap2.get("one")); // key 'one' 의 value 를 반환
console.log(newMap2.get("two")); // 값이 없음으로 undifined 출력


/*has() - 키의 존재 여부 확인*/
const newMap3 = new Map();
newMap3.set("one", 100);
console.log(newMap3.has("one")); //true
console.log(newMap3.has("two")); //false 


/*entries() - 이터레이터 오브젝트 생성*/

const newMap4 = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);

let iteratorObj = newMap4.entries(); //이터레이터 오브젝트 생성
let result = iteratorObj.next();

console.log(iteratorObj.next());  // value 와 done(이터레이터  종료 여부 반환)
console.log(iteratorObj.next());


/*forEach()-엘리먼트 마다 콜백 함수를 호출*/

const newMap5 = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);

newMap5.forEach((value, key, map) =>{ /* forEach 요소마다 불러올 콜백 함수*/ 
    console.log(key, value);
});


/*delete() - 엘리먼트 삭제*/
const newMap6 = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]); 

console.log(newMap6.delete("key1")); 
/* 
    키값이 있으면 삭제하고 true 반환
    키값이 없으면 false를 반환
*/

/*clear() - 모든 key, value쌍을 지움*/

const newMap7 = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);

console.log(newMap7.clear()); //모든 요소 초기화




