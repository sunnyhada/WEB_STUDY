//배열
//변수 자료형과 관계없이 삽입이 가능하다.
const array = [1,2,'three','four'];

console.log(array);

//배열 내장함수
//push(삽입)
array.push('hello');
console.log(array);

//length(배열의 길이)
console.log(array.length);

//이런식으로도 구성이 가능하다.
const names = [
  {name : '멍멍이'},
  {name : '고양이'},
  {name : '고참이'}
]

console.log(names);

//for문으로 이름 출력
//선언법은 C와 같다.

for(let i = 0 ; i<names.length ; i++){
  console.log(names[i].name);
}

//for ~ of 문
for(let name of names){
  console.log(name);
}

//for ~ in문
const doggy = {
  name : '멍멍이',
  sound : '멍멍',
  age : 2
}

//객체(Object)사용할 때 쓸 수 있는 것.
//entriy 배열 형태로 반환
console.log(Object.entries(doggy));
//왼쪽 key값 반환
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

//for ~ in 문
//객체에 대한 반복적인 작업을 시행할때 이용
for(let key in doggy){
  console.log(`${key} : ${doggy[key]}`)
}


//while문으로 이름 출력
//이것도 C와 같다.

let j = 0;
while(j<names.length)
{
  console.log(names[j].name);
  if(names[j].name === '고양이') break;
  j++;
}

//break, continue
//얘도 여타 다른 언어와 같음
//무한루프 조심하기..

//연습문제

function sumOf(numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length;i++)
  {
    sum+=numbers[i];
  }
  return sum;
}

const result = sumOf([1,2,3,4,5]);
console.log(result);
