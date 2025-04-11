/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; //업캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; //문제 발생 X, 업캐스팅
// dog = animal;   //오류 발생, 다운캐스팅
// dog가 더 크니까 반대로 되야되는것 아닌가??
// -> 아니다. 타입스크립트는 구조적 타입 시스템이므로 반대이다.
// 따라서 객체에서는 조건이 더 적은 타입이 슈퍼타입이 된다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs", // 업캐스팅이니까 되는거 아니야? 아니다. 밑에 설명
}; //객체 리터럴을 사용할 때에는 딱 정의된것만 사용할 수 있다.

/**
 * 초과 프로퍼티 검사
 */

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs", 이때도 초과 프로퍼티 검사 발동
});
func(programmingBook);
