/**
 * UnKnown 타입
 */

function unknownExam() {
  //업케스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num: number = unknownVar;  //다운 캐스팅이므로 오류가 뜬다.
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;    // 다운캐스팅
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 * 모든 타입의 슈퍼타입, 서브타입으로 작용
 * any 타입은 unknown 타입에 다운캐스팅 당해도 괜찮다. (한정)
 * 자신에게 다운캐스팅하는것도 가능하고 다운캐스팅 하는것도 가능하다.
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let nevervar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  //   neverVar = anyVar; //이것만 불가능하다.
}
