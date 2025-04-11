// Void와 Never 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  // 반환값이 string임
  return "hello";
}

function func2(): void {
  // 아무런 값도 반환하고 있지 않을 때 반환값 타입을 void타입으로 한다.
  // 반환값 타입을 undefined으로 하면 return 값을 undefined로 해야된다.
  // 마찬가지로 반환값 타입을 null로 하면 return 값을 null로 해야된다.
  console.log("hello");
}

let a: void;
// a = 1;   // 모두 오류 발생. void가 아니기 때문
// a = "hello";
// a = {};
a = undefined;
// a = null; //tsconfig의 strickNullChecks 옵션을 끄면 가능

// never
// never -> 존재하지 않는
// 불가능한 타입, 모순

function func3(): never {
  //절대로 정상적으로 종료될 수 없어서 반환값이 있는것 자체가 모순일 때 never 타입을 쓴다.
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// b = 1;   // never은 아무것도 담을 수 없다. any 타입도.
// b = {};
// b = "";
// b = undefined;
// b = null;
