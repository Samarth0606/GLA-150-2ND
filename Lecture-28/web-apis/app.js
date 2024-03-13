setTimeout(function () {
  console.log("hi bhai");
}, 4000);

let Id = setInterval(function () {
  console.log("gian hai aap");
}, 3000);

setTimeout(function () {
  clearInterval(Id);
}, 10000);
