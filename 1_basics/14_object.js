/**
 * Object / 객체
 */

// key : value pair
let GD = {
  name: "권지용",
  group: "bigBang",
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(GD);
console.log(GD.name);
console.log(GD["name"]);

const key = "name";

console.log(GD[key]);

console.log(GD.dance());

const nameKey = "name";
const nameValue = "GD";

const groupKey = "group";
const groupValue = "bigBang";

const GD2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};
console.log(GD2);
console.log(GD2.dance());

GD2["group"] = "YG";
console.log(GD2);

GD2["englishName"] = "G-Dragon";
console.log(GD2);

delete GD2["englishName"];
console.log(GD2);

/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const youJaeSuk = {
  name: "유재석",
  group: "안테나",
};
console.log(youJaeSuk);

// youJaeSuk = {};

youJaeSuk["group"] = "비보";
console.log(youJaeSuk);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(youJaeSuk));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(youJaeSuk));

const name = "유재석";

const jaeSuk = {
  name,
};
console.log(jaeSuk);
