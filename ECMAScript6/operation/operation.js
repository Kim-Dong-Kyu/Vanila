let item= "soccer";
let Sports ={
    [item] : 1,
    [item + "Game"] : "EPL",
    [item + "Method"](){
        return this[item];
    }
};

/*프로퍼티 키를 조합하는 것이 가능*/ 
console.log(Sports.soccer);  // 1 
console.log(Sports.soccerGame); // EPL
console.log(Sports.soccerMethod()); // 1