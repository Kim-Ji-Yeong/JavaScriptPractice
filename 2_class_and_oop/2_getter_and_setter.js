/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 떄
   * 2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const G_Dragon = new IdolModel("GD", 1988);
console.log(G_Dragon);
console.log(G_Dragon.nameAndYear);

G_Dragon.setName = "권지용";
console.log(G_Dragon);

console.log("-------------------");

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const G_Dragon2 = new IdolModel2("GD", 1988);
console.log(G_Dragon2);
console.log(G_Dragon2.name);

G_Dragon2.name = "권지용";
console.log(G_Dragon2.name);
