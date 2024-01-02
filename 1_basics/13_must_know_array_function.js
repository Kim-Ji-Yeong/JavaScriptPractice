/**
 * Array Functions
 */
let RunningMan = ["유재석", "지석진", "김종국", "양세찬", "하하", "송지효"];

console.log(RunningMan);

// push() 맨끝에 추가
RunningMan.push("kimJiYeong");
console.log(RunningMan);

console.log("-------------------");
// pop() 마지막 삭제
console.log(RunningMan.pop());
console.log(RunningMan);

console.log("-------------------");
// shift(); 첫번 째 삭제
console.log(RunningMan.shift());
console.log(RunningMan);

// unshift()
console.log(RunningMan.unshift("유재석"));
console.log(RunningMan);

console.log("-----------------");

console.log(RunningMan.splice(0, 3));
console.log(RunningMan);

RunningMan = ["유재석", "지석진", "김종국", "양세찬", "하하", "송지효"];

console.log(RunningMan);

// concat()
console.log(RunningMan.concat("kimJiYeong"));
console.log(RunningMan);

// slice()
console.log(RunningMan.slice(0, 3));
console.log(RunningMan);

// spread operator
let RunningMan2 = [...RunningMan];
console.log(RunningMan);

let RunningMan3 = [RunningMan];
console.log(RunningMan3);

console.log("---------------");
let RunningMan4 = RunningMan;

console.log(RunningMan4);
console.log(RunningMan4 === RunningMan);

// console.log([...RunningMan] === RunningMan);

// join()
console.log(RunningMan.join());
console.log(RunningMan.join("/"));
console.log(RunningMan.join(", "));

// sort()
// 오름차순
RunningMan.sort();
console.log(RunningMan);

console.log(RunningMan.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0 보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0 보다 작은 숫자를 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map()
console.log("------------------");
console.log(RunningMan.map((x) => x));
console.log(RunningMan.map((x) => `런닝맨 : ${x}`));

console.log(
  RunningMan.map((x) => {
    if (x === "유재석") {
      return `런닝맨: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(RunningMan);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
