
function makeCounter(predicate) {
    var counter = 0;
    return function () {
      counter = predicate(counter);
      return counter;
    };
  }

  function increase(n) {
    return ++n;
  }
  
  // 보조 함수
  function decrease(n) {
    return --n;
  }
  
  // 함수로 함수를 생성한다.
  // makeCounter 함수는 보조 함수를 인자로 전달받아 함수를 반환한다
  const increaser = makeCounter(increase);
  console.log(increaser()); // 1
  console.log(increaser()); // 2
  
  // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
  const decreaser = makeCounter(decrease);
  console.log(decreaser()); // -1
  console.log(decreaser()); // -2


  