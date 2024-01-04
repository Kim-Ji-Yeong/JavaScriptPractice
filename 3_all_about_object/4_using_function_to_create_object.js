/**
 * Using function to create objects
 */
function IdolModel(name, year) {
  if (!new.target) {
    return new IdolModel(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

const GD = new IdolModel("G_Dragon", 1988);
console.log(GD);
// console.log(GD.dance());
const GD2 = IdolModel("G_Dragon", 1988);
console.log(GD2);
// console.log(global.name);

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const GD3 = new IdolModelArrow("G_Dragon", 1988);
