let a, b, c; // variable Declaration
// let a; // let variable cannot re-declare with same name

var d;
// var d; // var variable can re-declare many time with same name

// Type of data
let m = 3,
  r = 8.9; // Number
let n = "abc"; // String
// object
let o = {
  id: 3,
  name: "Meet Butani",
  height: 5.5,
};

const s = 20;
// s = 30; // const is not allow to change value after one time assign;

let xyz = "xyz";
xyz = "pqr";

a = 1; // Variable assignment
b = 2;
c = a + b; // Arithmatic operation

console.log("a: ", a, "\nb: ", b, "\nc: ", c);

// Arithmetic Operators
let x = 3;
let y = 2;

console.log("\nx + y = ", x + y); // Addition
console.log("\nx - y = ", x - y); // Subtarction
console.log("\nx * y = ", x * y); // Multiply
console.log("\nx ** y = ", x ** y); // Expo
console.log("\nx / y = ", x / y); // Division
console.log("\nx % y = ", x % y); // Mod
console.log("\nx++ = ", x++); // Post Increment
console.log("\n++x = ", ++x); // Pre Increment
console.log("\nx-- = ", x--); // Post Decrement
console.log("\n--x = ", --x); // pre Decrement

// Difference between == and ===
let p = 3;
let q = "3";

console.log("\np == q : ", p == q); // Compare just value
console.log("\np === q : ", p === q); // Compare values and type

console.log("\n3 == 3.0 : ", 3 == 3.0); // Compare just value
console.log("\n3 === 3.0 : ", 3 === 3.0); // Compare values and type

// Array Fundamentals
let arr = [2, 5, 2, 6, 8, 1, 9];
console.log("\n", arr);
console.log("\n", arr.reverse());
console.log("\n", arr.sort()); // array sorted and store that is not temporary but permenent
console.log("\n", arr.length);
console.log("\n", arr.reverse());

const filter = arr.filter((item) => {
  return item >= 4;
});

console.warn("\nFiltered value from array : ", filter);

const result = arr.reduce((acc, item) => {});

console.warn("\nFiltered value from array : ", filter);

arr = [0, 1, "2", 3, 4, 5, 6, 7]; // in JavaScript different type of data possible to assign in array. if restrict this then use typescript.
console.log("\n", arr);

console.warn("Hiii");

// String Methods
let str1 = "Meet Buatni";
console.log("String Length : ", str1.length);

// slice(startIndex, endIndex)
console.log(str1.slice(6, 9)); // 6, 7, 8  // if startindex is + then index will start from 0
console.log(str1.slice(-9, -4)); // -9, -8, -7, -6, -5   // if startindex is - then index will start from -1

// substring(startIndex, endIndex)
console.log(str1.substring(6, 9));
console.log(str1.substring(-9, -4)); // index in - not allowed
console.log(str1.substring(-9, 4)); // index in - consider as 0

//substr(startIndex, count)
console.log(str1.substr(5, 4));
console.log(str1.substr(5));

console.log(str1.indexOf("t"));

// Functions
let ans = mult(1, 3);
console.log(ans);

function mult(a, b) {
  if (a > 2) {
    console.log(a);
  } else if (a < 5) {
    console.log("a less than 5");
  } else {
    console.log("Else Condition");
  }

  switch (a) {
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    default:
      console.log(a);
      break;
  }

  return a * b;
}
