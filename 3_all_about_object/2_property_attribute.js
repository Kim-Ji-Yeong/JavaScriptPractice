/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                     설정할 때 호출 되는 함수로 구성되는 프로퍼티 예를들면 getter와 setter
 */
const GD = {
  name: "권지용",
  year: 1988,
};

console.log(Object.getOwnPropertyDescriptor(GD, "name"));
console.log(Object.getOwnPropertyDescriptor(GD, "year"));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(GD, "name"));

console.log(Object.getOwnPropertyDescriptors(GD));

const GD2 = {
  name: "권지용",
  year: 1988,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(GD2);
console.log(GD2.age);

GD2.age = 32;
console.log(GD2.age);
console.log(GD2.year);

console.log(Object.getOwnPropertyDescriptor(GD2, "age"));

Object.defineProperty(GD2, "height", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(GD2);
console.log(Object.getOwnPropertyDescriptor(GD2, "height"));

GD2.height = 180;
console.log(GD2);

Object.defineProperty(GD2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(GD2, "height"));

console.log("----------------");
GD2.height = 172;
console.log(GD2);

/**
 * Enumerable
 */
console.log(Object.keys(GD2));
for (let key in GD2) {
  console.log(key);
}

Object.defineProperty(GD2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(GD2, "name"));

console.log("-----------------");
console.log(Object.keys(GD2));
for (let key in GD2) {
  console.log(key);
}
console.log(GD2);
console.log(GD2.name);

/**
 * Configurable
 */
Object.defineProperty(GD2, "height", {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(GD2, "height"));

// Object.defineProperty(GD2, "height", {
//   enumerable: false,
// });

Object.defineProperty(GD2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(GD2, "height"));

Object.defineProperty(GD2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(GD2, "height"));

// Object.defineProperty(GD2, "height", {
//   writable: true,
// });
