/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-----------");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("-----------");
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6x6의 정사각형을 출력해라

let square = "";
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}

console.log(square);

/**
 * for...in
 */

const GD = {
  name: "권지용",
  year: 1988,
  group: "bigBang",
};

console.log("---------");

for (let key in GD) {
  console.log(key);
}

const RunningMan = ["유재석", "지석진", "김종국", "양세찬", "송지효", "하하"];

console.log("---------");

for (let key in RunningMan) {
  // in loop을 array에 썼을 때는 key 값(index 값)
  console.log(key);
  console.log(`${key} : ${RunningMan[key]}`);
}

/**
 * for...of
 */
for (let value of RunningMan) {
  // for...of loop을 array에 썼을 때는 value 값
  console.log(value);
}

/**
 * While
 */
let number = 0;

while (number < 10) {
  number++;
}

console.log(number);

/**
 * do...while
 */
number = 0;

do {
  number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
console.log("----------");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("----------");
number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }

  number++;
  console.log(number);
}

/**
 * continue
 */
console.log("----------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("-------------");
number = 0;

while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
