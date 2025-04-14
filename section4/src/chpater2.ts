/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 * -> 두 조건이 모두 만족해야 두 함수의 타입이 호환된다.
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅 -> 호환됨
// b = a;  // 허용 안됨. 다운캐스팅이기 때문

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;  // 매개변수일때는 업캐스팅일때 호환 안됨.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; animalFunc가 슈퍼타입이기 때문에 업캐스팅이 안된다.
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);  // 오류: 업캐스팅
};

// Animal(슈퍼타입) <-- Dog(서브타입) 업캐스팅. 매개변수 기준으로 업캐스팅은 안된다.
// 반대로 Dog <-- Animal 다운캐스팅. 매개변수 기준으로 괜찮다.

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // Func1(매개변수 2개) <-- Func2 (매개변수 1개) 가능. // 대신 타입이 같아야함.
// func2 = func1; // 오류 발생. // Func2 <-- Func1 불가능.
