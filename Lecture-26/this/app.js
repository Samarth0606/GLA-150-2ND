// 1. object/method calling -> object

// let obj = {
//   a: 10,
//   b: 200,
//   fn: function () {
//     console.log(this);
//   },
// };

// obj.fn();

// -----------------------
// 2. direct calling -> window

// function sam() {
//   console.log(this);
// }

// sam(); //direct calling

// --------------------
// eg:

// let obj2 = {
//   a: "sam",
//   fn: function () {
//     console.log(this);
//   },
// };

// //obj2.fn()    //object

// let ans = obj2.fn;
// ans();    //window

// -------
// eg2:
// console.log(this);

// -----------
// eg3:

// let obj3 = {
//   a: 10,
//   fn: function () {
//     function sam() {
//       console.log(this);
//     }
//     sam();
//   },
// };
// obj3.fn();

// ----------------

// let obj3 = {
//   a: 10,
//   fn: function () {
//     function sam() {
//       console.log(this);
//     }
//     let a = sam;
//     return a;
//   },
// };
// let out = obj3.fn();
// out();

// --------------------

// function Sam() {
//   this.name = "sam";
// }

// let obj1 = new Sam();

// ---------------------

// ---------------------

// 5.arrow

// let obj = {
//   a: 20,
//   fn: () => {
//     console.log(this);
//   },
// };

// obj.fn();

// --------

let obj2 = {
  a: 100,
  fn: function () {
    console.log(this);
    let sam = () => {
      console.log(this);
    };
    sam();
  },
};
obj2.fn();
