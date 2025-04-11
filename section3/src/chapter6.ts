/**
 * 타입 단언, assertion
 * 값을 바꾸는것이 아닌 컴파일러의 눈을 가린다고 생각, 믿도록 만든다고 생각하면 된다
 * 확실할 때에만 사용하기.
 */

type Person = {
  name: string;
  age: number;
};

// let person: Person = {}; // 아직 person객체 안에 값을 넣지 않고 이후에 넣으려 할 때 에러가 난다.
// person.name = "장정훈";
// person.age = 27;

//해결법
let person = {} as Person; // {} 뒤의 타입으로 단언하라고 지정
person.name = "장정훈";
person.age;

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",    //초과 프로퍼티 검사 발동으로 에러 발생.
//   // 어쩔 수 없이 넣어야 한다면
// };

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // 이렇게 타입을 단언할 수 있다.

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입

let num3 = 10 as unknown as string; //에러가 난다. 겹치는 부분이 없음. 이럴 때에는 사이에 unknown 타입을 끼어 넣는다. 좋은 방식은 아니다.

/**
 * const 단언
 */

let num4 = 10 as const; // number 리터럴 타입인 10으로 지정됨 즉, let이 아닌 const로 선언한 것과 같게 만들어줌.

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; //모든 프로퍼티를 readonly로 변경
// cat.name = "" 수정 불가능하게 된다.

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; //익명 게시판일 수 있어서 ?를 붙여서 선택적 프로퍼티로 가정
};

let post: Post = {
  title: "게시글1",
  author: "장정훈",
};

// const len: number = post.author?.length; // 오류 발생. undefined가 될 수 있기 때문.
const len: number = post.author!.length; // 따라서 !를 붙여 null, undefined가 아니라고 컴파일러에게 알림
// post.author.length만 입력해도 자동으로 ?가 추가된다.
// -> 옵셔널체이닝
// author 프로퍼티의 값이 null, undefined일 경우에 점 표기법을 작성하면 오류가 발생하니까 ?를 붙여 author 프로퍼티가 없으면 값 전체를 undefined이 되도록 만들어줌
