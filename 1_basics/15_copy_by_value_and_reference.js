/**
 * copy by value 값에 의한 전달
 * copy by reference 참조의 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다 (object(function,array) 빼고 나머지)
 * 2) 객체는 copy by reference다
 */
let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

clone += " 유재석 입니다.";
console.log("---------------");
console.log(original);
console.log(clone);

let originalObj = {
  name: "GD",
  group: "bigBang",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj["group"] = "YG";
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: "유재석",
  group: "안테나",
};
cloneObj = {
  name: "유재석",
  group: "안테나",
};
console.log(originalObj === cloneObj);

const jaeSuk1 = {
  name: "유재석",
  group: "안테나",
};
const jaeSuk2 = jaeSuk1;
const jaeSuk3 = {
  name: "유재석",
  group: "안테나",
};

//true
console.log(jaeSuk1 === jaeSuk2);
//false
console.log(jaeSuk1 === jaeSuk3);
//false
console.log(jaeSuk2 === jaeSuk3);

/**
 * Spread Operator
 */
const jaeSuk4 = {
  ...jaeSuk3,
};
console.log(jaeSuk4);

console.log(jaeSuk4 === jaeSuk3);

const jaeSuk5 = {
  program: "runnigMan",
  ...jaeSuk3,
};
console.log(jaeSuk5);

const jaeSuk6 = {
  name: "youJaeSuk",
  ...jaeSuk3,
};
console.log(jaeSuk6);

const jaeSuk7 = {
  ...jaeSuk3,
  name: "youJaeSuk",
};
console.log(jaeSuk7);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];
console.log(numbers2);
