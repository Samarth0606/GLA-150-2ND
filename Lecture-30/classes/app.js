// function Sam(naam, umar, favRang) {
//   this.name = naam;
//   this.age = umar;
//   this.favColor = favRang;
// }
// let p1 = new Sam("sam", 90, "black");
// console.log(p1);

// -----------

// let obj = {
//   a: 10,
//   b: function () {
//     console.log("sam");
//   },
// };

// console.log(obj);
// console.log(obj.a);
// // console.log(obj.b);
// obj.b();
// // console.log(obj.c);
// // obj.c();
// console.log(obj.toString());

// ----------------------------------

// function Sam(naam, umar, favRang) {
//   this.name = naam;
//   this.age = umar;
//   this.favColor = favRang;
//   this.fn = function () {
//     console.log("kaju");
//   };
// }
// let p1 = new Sam("sam", 90, "black");
// let p2 = new Sam("vohra", 190, "purple");
// console.log(p1, p2);

// ------------

// function Sam(naam, umar, favRang) {
//   this.name = naam;
//   this.age = umar;
//   this.favColor = favRang;
// }

// Sam.prototype.fn = function () {
//   console.log("kaju");
// };
// let p1 = new Sam("sam", 90, "black");
// let p2 = new Sam("vohra", 190, "purple");
// console.log(p1, p2);

// --------------------------

// class Sam {
//   constructor(naam, umar, favRang) {
//     this.name = naam;
//     this.age = umar;
//     this.favColor = favRang;
//   }
//   fn() {
//     console.log("kaju");
//   }
// }

// let p1 = new Sam("sam", 90, "black");
// let p2 = new Sam("vohra", 190, "purple");
// console.log(p1, p2);

// ---------------------------------

class Person {
  constructor(naam, umar, email) {
    this.name = naam;
    this.age = umar;
    this.email = email;
  }
  greeting() {
    return `good morning from ${this.name}`;
  }
  level() {
    console.log("laval sabke niklenge");
  }
}

class Student extends Person {
  constructor(naam, umar, email, batch) {
    // super(naam, umar, email);
    super(naam, email, umar);
    this.batch = batch;
  }
  level() {
    console.log("jo end tak mojood rahega");
  }
}

let p1 = new Student("samarth", 44, "sam@gmail.com", "super150");
// let p2 = new Student("nikhil", 21, "nikhil@gmail.com");

console.log(p1);
p1.level();
