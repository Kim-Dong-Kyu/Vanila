let Sports = function() {
    this.count = 20;
}; 
Sports.prototype = {
    plus : function(){
        this.count +=1;
    }, 
    get : function(){
        setTimeout(()=> {
            this.plus();
            console.log(this.count);
        }, 1000);

    }
}; 

let newSports = new Sports();
newSports.get(); 
/* this 키워드가 window  객체를 카르기지 않고  클래스의 function을 지정한다.*/
