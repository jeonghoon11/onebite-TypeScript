// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 선언을 무엇으로 했는지 헷갈리지 않기 위함
// enum은 컴파일결과 사라지지 않는다. 자바스크립트 객체로 변환된다.

// 숫자를 할당하지 않아도 위에서부터 0, 1, 2로 할당된다.
// ADMIN = 10으로 할당하면 밑으로 11, 12로 할당된다.
// ADMIN 숫자를 할당하지 않고 USER를 10으로 할당하면 ADMIN: 0, USER: 10, GUEST: 11로 할당된다.
// 이러한 방식을 숫자형 Enum이라고 부른다.
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "장정훈",
  //   role: 0, // 0 <- 관리자
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  //   role: 1, // 1 <- 일반 유저
  role: Role.USER,
};

const user3 = {
  name: "아무개",
  //   role: 2, // 2 <- 게스트
  role: Role.GUEST,
};

console.log(user1, user2, user3);
