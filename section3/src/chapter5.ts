/**
 * 타입 추론
 * 어떤 상황에 타입을 추론하는지, 잘 추론하는지
 * 초기값으로 타입을 추론
 * 간단하게 설명하자면 추론할 값이 있으면 추론하고 추론할 값이 없으면 추론하지 않는다.
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "장정훈",
  profile: {
    nickname: "jeonghoon",
  },
  url: ["https://www.naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  // 함수의 반환값 타입을 추론할 때에는 return문 다음에 오는 반환값을 기준으로 추론한다.
  return "hello";
}

// 타입 넓히기 : 범용적으로 프로그래머가 변수를 사용할 수 있도록 하는 것
let d; //암묵적으로 any추론되고 이후 타입 진화
d = 10; //이후 number타입으로 추론 -> any타입에서 number타입으로 진화
d.toFixed();

d = "hello"; //이후 string타입으로 추론 -> string타입으로 진화
d.toUpperCase();
// d.toFixed(); // 오류

const num = 10; //상수이기 때문에 10 이후 다른 값 담지 않기때문에 number타입으로 고정됨
const str = "hello";

let arr = [1, "string"]; //union타입을 갖게됨 (number | string)[]
