/**
 * All about objects
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const GD = {
  name: "권지용",
  year: 1988,
};
console.log(GD);

class IdolModel {
  name;
  year;

  constructor(name, yaer) {
    this.name = name;
    this.year = yaer;
  }
}
console.log(new IdolModel("권지용", 1988));

// 생성자 함수
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const G_Dragon = new IdolFunction("권지용", 1988);
console.log(G_Dragon);
