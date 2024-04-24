// let p = new Promise(function (resolve, reject) {
//   console.log("top");
//   let data = "sagar di voti laindi indica chala";

//   let err = "mai gireya hua banda jama neech baliye";
//   //   resolve(data);
//   reject(err);
//   //   console.log("mai hu ek waaada");
//   //   console.log("end");
// });

// p.then().catch()

// p.then(function (d) {
//   console.log(d);
// });

// p.then(function (d) {
//   console.log(d, ".then");
// }).catch(function (e) {
//   console.log(e, ".catch");
// });

// p.catch(function (e) {
//   console.log(e, ".catch");
// });

// ------------------------------------

let step1 = function () {
  return new Promise((resolve, reject) => {
    console.log("plzz wait image is being selected...");
    setTimeout(function () {
      resolve("image selected");
    }, 4000);
  });
};

let step2 = function (image) {
  return new Promise((resolve, reject) => {
    console.log(`plzz wait filter is being applied on ${image}...`);
    setTimeout(function () {
      resolve("filter applied");
    }, 3000);
  });
};

step1()
  .then(function (image) {
    console.log(image);
    return step2(image);
  })
  .then(function (filter) {
    console.log(filter);
  });
