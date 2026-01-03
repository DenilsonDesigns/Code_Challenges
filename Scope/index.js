//  ***
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log("var:", i);
//   }, 0);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => {
//     console.log("let:", j);
//   }, 0);
// }

// ***
// var x = 10;

// function outer() {
//   console.log("A:", x);

//   if (true) {
//     var x = 20;
//     let y = 30;
//     const z = 40;

//     console.log("B:", x);
//     console.log("C:", y);
//     console.log("D:", z);
//   }

//   console.log("E:", x);

//   // What happens if we uncomment these?
//   // console.log(y);
//   // console.log(z);
// }

// outer();

// ***
let x = 1;

function test() {
  console.log("A:", x);

  if (true) {
    var x = 2;
    let y = 3;
  }

  console.log("B:", x);

  if (true) {
    let x = 4;
    x = 10;
    console.log("C:", x);
  }

  console.log("D:", x);
}

test();
