function step1(filter) {
  console.log("plz wait i am selecting image...");
  setTimeout(function () {
    console.log("image selected");
    filter("selected image");
  }, 5000);
}
function step2(image, caption) {
  console.log("plzz wait finding filter...");
  setTimeout(function () {
    console.log(`filter applied on ${image}`);
    caption("filtered image");
  }, 3000);
}

function step3(filter, upload) {
  console.log("plzz wait adding caption...");
  setTimeout(function () {
    console.log(`caption added on ${filter}`);
    upload("image uploaded");
  }, 7000);
}
function step4(final) {
  console.log("plzz wait uplaoding image...");
  setTimeout(function () {
    console.log(`${final}`);
  }, 4000);
}

step1(function (image) {
  step2(image, function (filter) {
    step3(filter, function (final) {
      step4(final);
    });
  });
});
