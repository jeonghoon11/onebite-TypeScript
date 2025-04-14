/**
 * 선언 합침
 */

// 타입 별칭은 동일한 타입을 정의하면 오류가 발생한다.
// type Person = {
//   name: string;
// };

// type Person = {
//   age: number;
// };

// 인터페이스는 동일한 타입으로 정의해도 오류가 발생하지 않는다.
// 동일한 인터페이스로 정의하면 선언이 합쳐진다.

interface Person {
  name: string;
}

interface Person {
  //   name: number; 타입을 다르게 정의하면 ( 충돌 ) 이 일어난다. 충돌은 허용되지 않는다.
  name: string; // 동일한 타입이어야 한다.
  age: number;
}

interface Developer extends Person {
  name: "hello"; // 서브타입 가능
}

const perosn: Person = {
  name: "",
  age: 25,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string; // lib에 c를 추가하고 싶으면 이렇게 모듈 보강을 한다.
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
