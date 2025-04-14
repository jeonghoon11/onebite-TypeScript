/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean; // 변수명이 isBarked로 변경되면 warning func에서 animal의 타입이 이상하게 추론된다. 이때 사용자 정의 타입가드를 사용.
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // 반환값이 true를 반환하면 즉, 참이면 animal 이 Dog 타입이구나 알아차림.
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
    animal;
  }
}
