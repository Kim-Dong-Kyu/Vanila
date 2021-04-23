let gen  = function*(start){
    let num = start;
    while (true){
        yield ++num;
    }
}
let genObj = gen(10);

console.log(genObj.next());
console.log(genObj.return(77)); 
/* return()은 제너레이터의 이터레이션을 종료합니다.*/ 
console.log(genObj.next(55));
