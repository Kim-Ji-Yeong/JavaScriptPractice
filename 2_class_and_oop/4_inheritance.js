/**
 * Inheritance
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return "여자 아이돌이 춤을 춥니다.";
  }
}

class MaleIdoModel extends IdolModel {
  sing() {
    return "남자 아이돌이 노래를 부릅니다.";
  }
}

const sunMi = new FemaleIdolModel("선미", 1992);
console.log(sunMi);

const GD = new MaleIdoModel("GD", 1988);
console.log(GD);

console.log(sunMi.dance());
console.log(sunMi.name);

console.log(GD.sing());
console.log(GD.year);

const jiYeong = new IdolModel("김지영", 1995);
console.log(jiYeong);
console.log(jiYeong.name);

console.log(sunMi instanceof IdolModel);
console.log(sunMi instanceof FemaleIdolModel);
console.log(sunMi instanceof MaleIdoModel);

console.log("---------------");

console.log(GD instanceof IdolModel);
console.log(GD instanceof FemaleIdolModel);
console.log(GD instanceof MaleIdoModel);

console.log("---------------");

console.log(jiYeong instanceof IdolModel);
console.log(jiYeong instanceof FemaleIdolModel);
console.log(jiYeong instanceof MaleIdoModel);
