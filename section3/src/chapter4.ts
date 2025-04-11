/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; //Union타입으로 정의
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union = {    //오류 발생. 교집합 또는 한쪽 집합 둘다 포함되지 않기 때문
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 * 기본타입에는 잘 안씀
 * 객체 타입에 주로 사용된다.
 */

let variable: number & string; //number과 string의 교집합? never타입. (변수에 마우스 올려보기)
//위의 Dog , Person 가지고 실습

type Intersection = Dog & Person;

let intersection1: Intersection = {
  //속성 3개 즉, 교집합을 가지고 있어야 한다.
  name: "",
  color: "",
  language: "",
};
