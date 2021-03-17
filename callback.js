function getData(){
    var tableData;
    $.get('https://domain.com/products/1', function(response) {
		tableData = response;
	});
    return tableData;
};

console.log(getData());
/*일반적인 상식이라면 ajax로 바당온 데이터를 반환 해야할거 같지만 undifined 반환*/

function selectName(name, callback){
    console.log('name :', name);
    callback();
}


function finishFunc(){
    console.log('finish function!');
}

