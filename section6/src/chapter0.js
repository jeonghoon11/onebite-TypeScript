/**
 * 클래스
 */

let studentA = {
  name: "장정훈",
  grade: "A+",
  age: 25,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  // 클래스 안에서는 쉼표로 구분짓지 않는다.
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다!.`);
  }
}

class StudentDeveloper extends Student {
  // 중복 코드가 그래도 많다. -> 상속을 사용.
  // 필드

  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // 이때 매개변수는 지우면 안된다.
    super(name, grade, age); //name, grade, age는 this로 받고 있지 않기 때문에 super을 사용
    // super클래스의 생성자 즉, 부모 클래스의 생성자가 호출된다.
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("장정훈", "A", 25, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("장정훈", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();
