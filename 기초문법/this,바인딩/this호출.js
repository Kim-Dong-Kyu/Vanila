var someone = {
    name : "kim", 
    whoAmI : function (){
        console.log(this.name);
    }
};

someone.whoAmI();  // kim 을 호출 => someone 이 호출 했기 때문에
var myWhoAmI = someone.whoAmI;
myWhoAmI(); // undefined를 호출 => myWhoAmI 가 호출했기 때문에
var someone2 ={
    name  : "kim", 
    whoAmI :function(){
        console.log(this.name);
    }
};

someone2.whoAmI();
var myWhoAmI2 = someone2.whoAmI;
myWhoAmI2();

var myWhoAmI3 = myWhoAmI2.bind(someone2);
myWhoAmI3();  /*바인드를 통해 this가 가져올 값을 바인딩*/ 

/*var myWhoAmI4 = myWhoAmI2.bind();
myWhoAmI4();*/



 