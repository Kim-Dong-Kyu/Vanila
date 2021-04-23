/* yield 와 next 사용 기본 예제 */ 
let getAmount = function*(qty, price){
    let amount = Math.floor(qty * price);
    let discount  = yield amount;
    return amount - discount;
}; 

let getDiscount  = function(amount){
    return amount > 1000 ? amount *0.2 : amount *0.1;
}; // 일반함수

let amountObj = getAmount(10,60);

let result = amountObj.next(); // 첫번째 yeild 까지 수행
console.log(result);
let dcAmount = getDiscount(result.value);
console.log(dcAmount);
console.log(amountObj.next(dcAmount)); // 두번 쨰 yield 까지 수행

/*제너레이터에서 yield 와 while 의 혼용*/

let gen = function*(value){
    let count =0;
    while(value){
        yield count++; 
    }
};

let genObj = gen(true);

console.log(genObj.next());
console.log(genObj.next());






