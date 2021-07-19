
var paramArray = new Array();
paramArray.push("a");
paramArray.push("b");
paramArray.push("c");

$.ajax({
    :"/score/ajax/research",
    type : "POST",
    data : {"paramArray" :paramArray}
    dataType : "json"
    success: function(result) {
       /*성공 로직*/ 
    }, 
    error : function(error){
        /*error 로직*/ 
    }
});