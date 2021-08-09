var array =  new Array();
array =[1,2,3]
console.log(array)

var dupArray = [1,2,3,4,5,1,2,3];
var uniqArray = dupArray.filter((element, index) =>{
    return dupArray.indexOf(element) === index
})

console.log(uniqArray);