console.log('Hello jsp!');

let value = 1; //변수 선언 
console.log(value);

value = 3;
console.log(value);

//한번 선언된 변수 명은 다시 선언을 할 수 없다.
//다른 블록범위에서는 가능

const num = 2; //상수 선언
console.log(num);

var a = 22; // 예전에 쓰긴 했음.
//var는 같은 이름으로 여러번 선언 가능
//var와 let은 선언 범위가 다름.
//구형 브라우저에서는 못쓰지만
//보통은 개발과정에 호환해주는 프로그램이 있음.

let name = 'sunny';
// ;는 있어도 되고 없어도 됨. 
console.log(name);

let loading = true;
let goal = false;

let good = null;
let criminal = undefined;

// Null 없는 것
// undefined 값이 아직 설정되지 않은 것.
// 소문자로 작성함.

let sum = 1+2+3+4+(5*3)/4;
console.log(sum);
sum++;
console.log(sum);
console.log(++sum);
console.log(sum++);
console.log(sum);
sum+=3;
console.log(sum);
sum/=3;
console.log(sum);
//기본적으로 연산자는 여타 언어와 동일 함.

//논리 연산자//
// NOT ! AND && OR || 순위로 처리됨
// 얘도 여타 언어와 같음.

const hello = false;
const bye = true;
const sleep = true;
console.log(hello);
console.log(!hello);
console.log(hello&&bye);
console.log(!hello&&bye);
console.log(bye&&sleep);
console.log(hello||bye);

//비교연산자도 비슷한듯.
// ===, !==, >, >= 등

//정확한 비교를 하려면 ===을 입력
// ==를 쓰면 true == 1임. 
//되도록 세글자로 입력하기
const A=1;
const B=1;
const C=2;
console.log(A===B);
console.log(A===C);
console.log(A!==B);
console.log(B!==C);

console.log(A<B);
console.log(A>B);
console.log(A>=B);

//문자열 합치기 +로 가능
const before = '안녕';
const after = '하세요';

console.log(before+after);

//조건문
// if, else if
// {}감싸지면 블록처리라서 같은 이름의 상수를 지정가능
// %d 처럼 지정자도 사용 가능 함.
const num1 = 3;
if(num1+1===2){
  const num1 = 2; //이렇게 됨.
  console.log('num+1은 2입니다.');
  console.log('%d+1은 2입니다.',num1);
}

else if(num1+1===3){
  console.log('%d+1은 3입니다.',num1);
}

else {
  console.log('%d+1은 2도 3도 아닙니다.', num1);
}

//switch case문도 있음.
//break를 꼭 써줘야 함.
//default 사용해주기
const device = 'iphone';

switch(device) {
  case 'iphone' :
    console.log('아이폰');
    break;
  case 'ipad' :
    console.log('아이패드');
    break;
  default :
    console.log('뭔지 모르겠네요.');
    break;
}

// 함수 만들기
// function으로 지정함.
function add(a,b) {
  return a+b;
}

const addresult = add(5,2);
console.log(addresult);

//문자열 받기
function greet(name){
  console.log('hello '+name+'!');
}

greet('sunny');
greet('siwoo');

//ES6
//ECMAScript 6
//ES2015
//버전은 계속 업데이트 중

//문자열을 더 쉽게 합치는 방법이 있음.
//${}로 감싸면 되는데 `를 써야함.***
function meet(name1){
  console.log(`hello ${name1}!`);
}

meet('sunny');

function getgrade(score)
{
  if(score===100){
    return 'A+';
  }
  else if(score>=90){
    return 'A';
  }
  else if(score===89){
    return 'B+';  
  }
  else if(score>=80){
    return 'B';
  }
  else if(score===79){
    return 'C+';  
  }
  else if(score>=70){
    return 'C';
  }  
  else if(score===69){
    return 'D+';  
  }
  else if(score>=60){
    return 'D';
  }
  else{
    return 'F';
  }
}

let score = 100;
console.log(getgrade(score));
score = 95;
console.log(getgrade(score));
score = 88;
console.log(getgrade(score));
score = 69;
console.log(getgrade(score));
score = 20;
console.log(getgrade(score));

//화살표 함수
//function과 가리키는 this가 다름
//한줄 코드는 연산이 간단한 경우 아래와 같이 한줄 표현 가능.
const multiply = (a, b) => a*b;

const mul = multiply(2, 3);
console.log(mul);

const hello2 = (name) => {
  console.log(`Hello ${name}`);
}

hello2('Siwoo')
