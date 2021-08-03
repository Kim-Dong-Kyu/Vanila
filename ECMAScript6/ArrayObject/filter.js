var dupArr = [1,2,3,4,5,6,1,2,3];
var uniqArr = dupArr.filter((element, index)=>{
    return dupArr.indexOf(element) === index
})

console.log(uniqArr);

var dupArr2 = [1,20,3,40]
console.log(dupArr2.indexOf(40));
 



