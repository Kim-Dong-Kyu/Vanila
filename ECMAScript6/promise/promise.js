function promise_function(){
    return new Promise(function(resolve, reject){
      $.ajax({
        url: '/sm/util/ajaxTest',
        data: 'num=10',
        type: 'post',
        dataType: 'json',
        success : function(result){
                var num = result.num;
                resolve(num);
                
              }
      }); 
    });
  }
    
function firstAjax(num){
    return new Promise(function(resolve, reject){
      alert('첫번째 실행');
      $.ajax({
        url: '/sm/util/ajaxTest',
        data: 'num=20',
        type: 'post',
        dataType: 'json',
        success : function(result){
                var num = result.num;
                resolve(num);
                 
              }
      });
    });
 
  }
 
function secondAjax(num){
    return new Promise(function(resolve, reject){
      alert('두번째 실행');
      $.ajax({
        url: '/sm/util/ajaxTest',
        data: 'num=20',
        type: 'post',
        dataType: 'json',
        success : function(result){
                var num = result.num;
                resolve();
                 
              }
      });
    });
 
  }
 
   
function successFunction(){
  alert('성공');
  return false;
}
function errorFunction(){
    alert('에러');
    return false;
  }
   
promise_function()
.then(firstAjax)
.then(secondAjax)
.then(successFunction)
.catch(errorFunction);


