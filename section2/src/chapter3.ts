// object
let user1: object = {
  id: 1,
  name: "장정훈",
};
// user1.id; object타입을 정의하면 이렇게 접근 불가능하다.
// 이유: user가 객체 타입이라는 정보 외에는 제공하지 않기 때문 따라서 객체의 프로퍼티, 메서드를 알 수 없다.
// 때문에 객체 리터럴 타입을 사용해야된다.

let user2: {
  id?: number; //?를 넣으면 id가 있어도 되고 없어도 된다는것을 의미. -> 선택적 프로퍼티, optional
  name: string;
} = {
  id: 1,
  name: "장정훈",
};

user2.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};
// 구조를 기준으로 타입을 지정함
// -> 구조적 타입 시스템
// -> property Based Type System이라고도 불림
// 이름을 기준으로 타입 지정 -> 명목적 타입 시스템

user2 = {
  //id가 없어도 오류가 안나게 하려면 user2 객체 확인
  name: "홍길동",
};

let config: {
  readonly apiKey: string; //readonly를 붙이면 값을 변경할 수 없게 한다.
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked" readonly가 적용되어 변경 불가능.
