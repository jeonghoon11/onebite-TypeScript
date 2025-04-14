/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2.매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 오버로딩을 구현하려면 함수에 어떤 버전들이 있는지 알려줘야한다. -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 함수의 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  // 오버로드 시그니쳐의 매개변수의 차이가 있다면 선택적 prop로 의미가 있도록 만들어야 한다.
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // 오류.
func(1);
// func(1, 2); // 오류.
func(1, 2, 3);
