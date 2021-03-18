const value = [10,20,30];
get(...value);

/*순차적으로 one, two, three 에 값이 설정이 된다.*/ 
function get(one, two, three){
    console.log(one + two + three); 
}