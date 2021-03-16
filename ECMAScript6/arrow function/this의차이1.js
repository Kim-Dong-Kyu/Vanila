let Sports = function(){
    this.count =20;
}
Sports.prototype ={
    plus: function(){
        this.count += 1; 
    }, 
    get: function(){
        setTimeout(function(){
            console.log(this === window);
            console.log(this.plus);
        },1000)
    }
};

let newSports = new Sports();
new Sports.get();  /*정의가 되지 않음*/