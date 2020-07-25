function scopeExam() {  
    var a = 0;
    if (true) {
        var b = 0;
        for (var c = 0; c < 5; c++) {
            console.log("c=" + c);
        }
        console.log("c=" + c);
    }
    console.log("b=" + b);
}
scopeExam();

/* 함수 단위 스코프  확인 예제*/

var scope = 10;  
function scopeExam(){  
    var scope = 20;
	if(true){
    	var scope = 30;
		console.log("scope = " + scope);
	}
    console.log("scope = " + scope);
}
scopeExam();  
console.log("scope = " + scope);
/* 변수명 중복선언 예제 */


function scopeExam(){  
    scope = 20;
    console.log("scope = " +scope);
}

function scopeExam2(){  
    console.log("scope = " + scope);
}
scopeExam();  
scopeExam2(); 

// 변수 키워드 생략 예제ㄴ
