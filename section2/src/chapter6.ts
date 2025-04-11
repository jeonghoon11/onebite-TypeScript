// Any타입과 Unknown 타입
// any
// 특정 변수의 타입을 확실히 모를 때

let anyVar: any = 10; // anyVar가 범용적으로 사용된다 가정
anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};
// anyVar.toUppercase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar; // 가능
// 모든 타입의 변수에도 값을 집어넣을 수 있다. 하지만 에러는 런타임에 발생한다.
// 따라서 가능한 사용하지 않는것이 좋다.

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입은 모든 값을 저장할 수 있지만 반대로는 안된다.
// num = unknownVar; // 오류 발생
// unknownVar.toUppercase();    // 오류 발생

if (typeof unknownVar === "number") {
  // 이처럼 타입 정제했을 때에는 사용 가능하다.
  num = unknownVar;
}

// 따라서 any 보다 unknown 타입을 사용하는 것이 낫다.
