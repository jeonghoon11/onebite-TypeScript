// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello"; // ''입니다. Prettier 켜져있어서
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null; //tsconfing.json에서 strictNullChecks 옵션을 false로 바꾸면 null값을 넣어둘 수 있다.

// 리터럴 타입 -> 값 그 자체가 타입이 되는 타입
// 리터럴 -> 값
let numA: 10 = 10; // 10이라는 값만 넣을 수 있다.
// numA = 12; //오류 발생

let strA: "hello" = "hello";
// strA = "dir"; //오류 발생

// let boolA: true = false; //오류 발생
