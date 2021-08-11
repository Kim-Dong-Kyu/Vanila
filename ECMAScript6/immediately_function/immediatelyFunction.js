/*일반적인 함수 호출 */
var app = function(){
    console.log("일반 함수 호출");
}
app();

/*즉시 실행함수*/
(function(){
    console.log("즉시 실행 함수 호출");
}());
