/**
 * Static Keyword
 */
// class IdolModel {
//   name;
//   year;
//   static groupName = "bigBang";

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return "bigBang";
//   }
// }

// const G_Dragon = new IdolModel("GD", 1988);
// console.log(G_Dragon);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const GD = IdolModel.fromObject({
  name: "GD",
  year: 1988,
});
console.log(GD);
const taeYang = IdolModel.fromList(["태양", 1988]);
console.log(taeYang);
