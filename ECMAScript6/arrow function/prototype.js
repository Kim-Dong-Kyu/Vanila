let Sports =  function (){
    this.count  =20;
}

Sports.prototype = {
    add : ()=> {
        this.count +=1;
    }
}; 

let newSports = new Sports();

newSports.add();
console.log(newSports.count); /* add 함수를 수행했지만  20 출력*/
console.log(window.count); 


