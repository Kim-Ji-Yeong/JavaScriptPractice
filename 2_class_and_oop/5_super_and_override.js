/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}
const sunMi = new FemaleIdolModel("선미", 1992, "댄스");
console.log(sunMi);

const taeYeon = new IdolModel("태연", 1989);
console.log(taeYeon);
console.log(taeYeon.sayHello());
console.log(sunMi.sayHello());
