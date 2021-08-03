
var testArray = [1,2,3,4,1,2];

var uniqArray = testArray.filter((element, index) => {
    return  testArray.indexOf(element) === index
})

console.log(uniqArray);


var 