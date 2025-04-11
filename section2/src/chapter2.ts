// 배열
let numArr: number[] = [1, 2, 3]; //:요소의 타입, 그리고 []로 배열임을 알림 -> :number[]

let strArr: string[] = ["hello", "im", "jeonghoon"];

//이렇게도 배열타입을 정의할 수 있다. <>로 타입을 정의하는 것을 제네릭문법이라고 한다.
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우, 어떻게 정의할지 잘 모르겠다면 변수에 마우스 올려보기
let multiArr: (number | string)[] = [1, "hello"]; //number 또는 string임을 명시

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  //number타입의 배열을 저장하는 배열이므로 [][] 열달아 작성
  [1, 2, 3],
  [4, 5],
];

// 튜플 -> 자바스크립트에는 없고 타입스크립트에서만 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]; // 첫 번째 타입의 number, 두 번째 타입의 number
// tup1 = [1, 2, 3]; // 불가
// tup1 = ["1", "2"] // 불가

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2", 1, true] // 불가

// 컴파일하면 js에 배열로 나오게 된다.
tup1.push(1); //튜플의 길이를 2개로 지정했지만 길이에 지장을 주지 않으므로 주의
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
  ["장정훈", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //   [5, "최아무개"], //튜플을 사용하여 오류가 발생하는 곳을 확인하는데 좋다.
];
