//객체

const dogname = '멍멍이'
const dogage = 2;

console.log(dogname);
console.log(dogage);

// 쉼표로 특성을 구분함.
// 보통 문자열이 됨. 단 공백이 있으면 안됨
// 공백의 경우 감싸줘도 됨
const cat = {
  name : '야옹이',
  age : 3,
  cute: true,
  smile: {
    dog: false,
    human: true
  },
  'she is good':true
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.cute);
console.log(cat.smile.dog);
console.log(cat.smile.human);
console.log(cat["she is good"])

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

//객체명만 입력하면 다 나옴.
console.log(ironMan);
console.log(captainAmerica);

//함수에서도 객체를 받을 수 있음

function print(hero){
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

//비구조 할당(객체 구조 분해)

function printinfo(hero){
  const {alias, name, actor} = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

printinfo(ironMan);
printinfo(captainAmerica);

//입력값을 받을때에도 비구조 할당이 가능함.
//특정 값을 객체에서 빼올 때 쓰기 가능
//깔끔한 코드를 짜는데에도 좋다.
function printinfo2({alias, name, actor}){
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

printinfo2(ironMan);
printinfo2(captainAmerica);

//객체 this?
//화살표함수는 작동하지 않음.
//function -> 자기가 속해있는 곳으로 이동.
//화살표 함수 -> 자기가 속한곳을 가리키지 않음.
//범위에 유의하기.
const puppy = {
  name:'멍멍이',
  sound:'멍멍!',
  say : function say() {
    console.log(this.sound);
  }
}

puppy.say()

const kitty = {
  name:'야용이',
  sound:'야옹~'
}

kitty.say = puppy.say;
puppy.say();
kitty.say();

const catSay = cat.say;
//객체 밖으로 나오면 함수가 작동 X
// 따라서 undefined됨
console.log(catSay);
