//getter 와 Setter.

const numbers = {
  a:1,
  b:2
};

numbers.a = 4;
console.log(numbers);

//getter함수
//get 이용
//특정값을 조회하고자 할때(호출X)
//받아서 연산시키는 것.
const number = {
  a:1,
  b:2,
  get sum() {
    console.log('sum함수가 실행됩니다.');
    return this.a + this.b;
  }
};

console.log(number.sum);
numbers.b=5;
console.log(number.sum);

//Setter함수
//set 이용
//똑같은 이름의 getter, setter는 넣을 수 있음.
const dog = {
  _name: '멍멍이',
  get name() {
    console.log('_name을 조회합니다..');
    return this._name;
  },
  set name(value) {
    console.log('이름이 바뀝니다..'+value);
    this._name= value;
  }
}

//조회하고자 할때 _를 넣지 않아 줄 수 있음
console.log(dog.name);
dog.name='뭉뭉이'; //set함수의 이름 -> 실행됨
console.log(dog._name);

//활용 예
//조회할때마다 함수가 시행되지 않도록 해줄 수 있음.
//get은 조회할 때 시행
//set은 값을 설정할 때 시행
const nums = {
  _a:1,
  _b:2,
  sum:3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  //값을 받아올때 함수 호출도 가능
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
}

console.log(nums.sum);
nums.a = 5; //calculate가 실행됨.
nums.b = 7;
console.log(nums.sum);
console.log(nums.sum);
console.log(nums.sum);
