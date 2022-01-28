// 1. 변수의 선언과 할당
let a; // 변수 선언 : 변수를 사용하겠다고 메모리에 등록
// 선언 전에도 암묵적으로 undefined 할당
console.log(a);
a=1; //변수 할당 : 변수에 값을 지정하는것
console.log(a);

// 2. 변수의 종류
let b; //값이변할때쓴다

// SyntaxError: Missing initializer in const declaration
// 초기화 : 변수를 선언한 후, 처음으로 할당하는 것
const c=1;//값이변하지않을때 (객체와 배열은 사용 가능)

var d; //고대유물 사용하지 않는다.범위가너무넓다.
console.log(d)

// 자료형
// 원시 타입 : 숫자형, 문자형,undefined,null, 불리언(true,false)
// 객체 타입 : 객체, 배열, 함수

// undefined는 값을할당하지않았을때 자동으로 저장이되는것이고 null은 일부러 값을 주지않은것이다.


