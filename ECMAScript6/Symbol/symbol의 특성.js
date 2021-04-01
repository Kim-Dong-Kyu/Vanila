/*==============symbol의 기본성질================*/ 

const sym = Symbol(); //변경이 불가능 한 값이기 때문에 const 사용가능   
console.log("1:" , sym);
console.log("2:",typeof sym); //symbol의 타입은 symbol
console.log("3:",Symbol("주석")); //생성 과정에서 주석 작성 가능
console.log("4:", sym==Symbol());  
/*
    false 를 반환 symbol은 프로그램 내 유일한 값을 가지기 떄문에
    동일 값이 될 수 없음
*/

let sym2 = Symbol();
try {
    +sym2  
} catch (error) {
    console.log("+sym2 사용불가")
}; /*number 변환 단항연산자 사용시 에러*/ 
try {
     sym | 0 ;   
} catch (error) {
    console.log("sym2 : 0 사용불가")
} /* or 비트 연사자 같이 쓰면 에러*/


let sym3  = Symbol();
try {
    sym3 + "문자열";
} catch (errir) {
    console.log("문자열 연결 불가"); /*symbol에 문자열 연결 불가*/ 
};
console.log(String(sym3) + "연결"); //  symbol 값을 String()으로 변경했을 경우 연결 가능
console.log(sym3.toString() + "연결"); // symbol 값을 toString() 으로 변환하여 연결할 경우 연결 가능

