let one = 1, two = 2;
function tagFunction(text, value){ 
    // text = template literal 문자열 , value = 결과
    console.log("1 :", text[0]); // expression을 제외한 문자열
    console.log("2 :", value); // tag function  의 결과
    console.log("3 :", text[1]);
    // template literal 에서 다음 문자열이 없을때 빈 문자열이 추가됨 
    console.log("4 :", typeof text[1]);
    //빈 문자열이 추가 됐기 떄문에 type은 String  
}

tagFunction `1+2=${one + two}입니다`; 
