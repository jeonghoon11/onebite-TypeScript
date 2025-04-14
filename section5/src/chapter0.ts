/**
 * 인터페이스
 * -> 타입에 이름을 지어주는 또 다른 문법
 * -> 객체의 구조를 정의하는데 특화된 문법
 * ( 상속, 합침 등의 특수한 기능을 제공함 )
 */

interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void; // 함수 타입 표현식
  sayHi(): void; // 호출 시그니쳐를 이용할 수 있음.
  sayHi(a: number, b: number): void; // 메서드의 오버로딩을 구현하고 싶으면 호출 시그니쳐를 사용하는것을 권장
}

type Type1 = number | string | Person;
type Type2 = (number & string) | Person;

const person: Person = {
  name: "장정훈",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
