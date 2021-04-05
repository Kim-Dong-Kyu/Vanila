function myfunc(){};
myfunc.prototype.getName = function(){
    console.log("kim-dong-kyu");
}

function myfunc2(){};
myfunc2.prototype = new myfunc();

var kim = new myfunc2();
kim.getName();


