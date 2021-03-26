function getData(){
    var tableData ;
    $.get('https://domain.com/products/1', function(response) {
		tableData = response;
	});
    return tableData;
};

console.log(getData());
/*
    일반적인 상식이라면 ajax로 받아온 데이터를 반환 해야할거 같지만 undifined 반환
    => ajax 비동기 식이 return 을 기다려 주지 안ㄹ고다음 문자응을 수행 해버림(return)
*/

function selectName(name, callback){
    console.log('name :', name);
    callback();
}


function finishFunc(){
    console.log('finish function!');
}

function getData2(callbackFunc){
    $.get('https://domain.com/products/1', function(response) {
		callbackFunc(response);
	});
}

getData2(function(tableData){
    console.log(tableData);
});
