function* sports(one){
    let two = yield one;
    let param = yield two + one;
    yield param + one;
}

let generatorObj = sports(10);

console.log(generatorObj.next()); // 첫번째 yield 까지
console.log(generatorObj.next(20)); // 두번째 yield 까지
console.log(generatorObj.next()); // 세번째 yield 까지 s