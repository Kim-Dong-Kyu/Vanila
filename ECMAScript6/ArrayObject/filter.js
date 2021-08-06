var dupArr=[1,2,3,4,5,6,7,8,9];
var dupArr2= [...dupArr,8,9,10];

var uniqArr = dupArr2.filter((element, index) => {
    return dupArr2.indexOf(element) === index;
});


console.log(uniqArr); 


var dupArr = [1,2,3,4,5,6,7,8,1,2,3];    
var uniqArr2 = dupArr.filter((element, index) => {
    return dupArr.indexOf(element) === index
}) 

console.log(uniqArr2);

