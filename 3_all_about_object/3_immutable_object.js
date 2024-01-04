/**
 * Immutable Object
 */
const GD = {
  name: "GD",
  year: 1988,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(GD);

/**
 * Extensible
 */
console.log(Object.isExtensible(GD));

GD["position"] = "rap";

console.log(GD);

Object.preventExtensions(GD);

console.log(Object.isExtensible(GD));

GD["groupName"] = "bigBang";
console.log(GD);

delete GD["position"];
console.log(GD);

/**
 * Seal
 */
const GD2 = {
  name: "GD",
  year: 1988,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(GD2);

console.log(Object.isSealed(GD2));

Object.seal(GD2);

console.log(Object.isSealed(GD2));

GD2["groupName"] = "bigBang";
console.log(GD2);

delete GD2["name"];
console.log(GD2);

Object.defineProperty(GD2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(GD2, "name"));

/**
 * Freezed
 *
 * 읽기 외의 모든 기능을 불가능하게 한다.
 */
const GD3 = {
  name: "GD",
  year: 1988,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(GD3));

Object.freeze(GD3);
console.log(Object.isFrozen(GD3));

GD3["groupName"] = "bigBang";
console.log(GD3);

delete GD3["name"];
console.log(GD3);

// Object.defineProperty(GD3, "name", {
//   value: "권지용",
// });
console.log(Object.getOwnPropertyDescriptor(GD3, "name"));

const GD4 = {
  name: "GD",
  year: 1988,
  taeYang: {
    name: "태양",
    year: 1988,
  },
};
Object.freeze(GD4);

console.log(Object.isFrozen(GD4));
console.log(Object.isFrozen(GD4["taeYang"]));
