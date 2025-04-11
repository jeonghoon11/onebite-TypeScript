// 타입 별칭과 인덱스 시그니처
// 타입 별칭
// 타입을 정의하는 코드라도 중복이 발생하면 좋지않다. 따라서 타입 별칭을 사용한다.
// 주의점 : 중복된 이름으로 타입 별칭을 선언하면 오류 발생.

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  //함수 스코프 안에서는 다르게 작용.
  type User = {};
}

let user: User = {
  id: 1,
  name: "장정훈",
  nickname: "jeonghoon",
  birth: "2001.01.21",
  bio: "안녕하세요",
  location: "서울특별시 성북구",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "jeonghoon",
  birth: "2001.01.21",
  bio: "안녕하세요",
  location: "서울특별시 성북구",
};

// 인덱스 시그니처 -> 객체 타입의 정의를 더 유연하게 해줌, 위반하지만 않으면 허용한다. 따라서 객체 안에 아무것도 없어도 괜찮다
// key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
// 나라가 늘어나면 타입 별칭도 늘어나게 된다.
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKindom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 인덱스 시그니처와 일치하거나 호환해야된다.
};

let countryNumbercodes: CountryNumberCodes = {
  Korea: 410, //작성하지 않으면 오류.
};
