/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한 개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 28;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("--------------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof Infinity);
console.log(typeof nInfinity);
console.log("--------------");

/**
 * String 타입
 */
const JiYeong = '"지"영';
console.log(JiYeong);
console.log(typeof JiYeong);

const GD = "'GD' 지드래곤";
console.log(GD);

/**
 * Template Literal
 *
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */

const G_Dragon = "G\nD";
console.log(G_Dragon);
const BigBang = "G\tD";
console.log(BigBang);
const YG = "G\\D";
console.log(YG);
const BIGBANG = "GD'빅뱅";
console.log(BIGBANG);

const Big_Bang = `GD 쥐드래곤
G_Dragon`;
console.log(Big_Bang);
console.log(typeof Big_Bang);

const groupName = "BigBang";
console.log(groupName + " GD");
console.log(`${groupName} GD`);

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 초기화하는 건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용된다.
 */
let init = null;
console.log(typeof init);
console.log("------------------");
/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = "1";
const test2 = "1";

console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);

/**
 * Object 타입
 *
 * Map
 * 키 : 벨류의 쌍으로 이루어진다.
 * key : value
 */

const dictionary = {
  red: "빨간색",
  orange: "주황색",
  green: "초록색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["green"]);

console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const RunningMan = ["유재석", "하하", "양세찬", "지석진", "송지효", "김종국"];
console.log(RunningMan);

/**
 * index
 *
 * 0부터 시작한다.
 * 1씩 올라간다.
 */

console.log(RunningMan[0]);
console.log(RunningMan[5]);

RunningMan[0] = "이광수";
console.log(RunningMan);
console.log(typeof RunningMan);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * JS -> dynaminc typing
 */
