/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value; // string | number 즉 유니온타입으로 추론되고 있음.
  //   value.toUpperCase();   // 둘다 오류 발생
  //   value.toFixed();

  if (typeof value === "number") {
    // typeof 연산자를 활용해서 타입을 좁히는 것을 '타입가드'라고 한다.
    console.log(value.toFixed()); // value에 마우스를 올리면 number타입으로 추론되고 있음.
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value에 마우스를 올리면 string타입으로 추론되고 있음.
  }
  //    else if (typeof value === "object") {   // null에 typeof를 해도 object 타입으로 추론된다.
  //     console.log(value.getTime());   // 따라서 오류가 발생
  //   }
  else if (value instanceof Date) {
    // instanceof 연산자 사용 즉, 새로운 타입가드를 사용한다.
    // instanceof: value가 Date객체냐 아니냐 물어봄
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // in 연산자를 사용하여 age가 value에 있는지 물어보고 true, false값을 반환한다. 이렇게 해도 에러가 난다. value가 null일 수 있기 때문
    // 따라서 단락평가로 value가 truthy한 값임을 먼저 선언하고 이후 "age" in value로 true값을 반환시킨다.
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
