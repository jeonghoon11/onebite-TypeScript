/**
 * 인터페이스의 확장( 상속 )
 */

// 중복이 너무 많을때 상속한다.
// 부모에서 타입을 다시 정의할 수 있다. 이때 원본 프로퍼티 타입의 서브타입으로 정의 해야한다.
// 되도록 객체타입을 정의해야할 때 타입 별칭보다는 interface를 사용.

interface Animal {
  // interface가 아닌 type 별칭이어도 확장 가능하다. interface는 객체 타입이면 모두 확장 가능하다.
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface DogCat extends Dog, Cat {} // 다중 확장도 가능하다.

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

// interface Dog {
//   name: string;
//   color: string;
//   isbark: boolean;
// }

// interface Cat {
//   name: string;
//   color: string;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   color: string;
//   isFly: boolean;
// }
