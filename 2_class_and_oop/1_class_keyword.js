/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// constructor - 생성자

const G_Dragon = new IdolModel("GD", 1988);
console.log(G_Dragon);

const taeYang = new IdolModel("태양", 1988);
console.log(taeYang);

console.log(G_Dragon.name);
console.log(G_Dragon.year);

console.log(G_Dragon.sayName());
console.log(taeYang.sayName());

console.log(typeof IdolModel); // 클래스는 함수이다.
console.log(typeof G_Dragon); // 클래스로 생성한 인스턴스는 오브젝트(객체)이다.
