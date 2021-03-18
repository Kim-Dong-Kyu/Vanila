let get1 = (one) => {
    console.log(one);
}
get1(...[1,2,3]);
/*spread 연산자를 호출 했지만 연산자 안 하나의  index 밖에 불러오지 못함*/ 
let get2 =(...rest) =>{
    console.log(rest); 
    cnosole.log(Array.isArray(rest));
}
get2(...[1,2,3]);
/* rest를 사용하면 spread 연산자의 값을 모두 받아 오는 것이 가능하다.*/ 

