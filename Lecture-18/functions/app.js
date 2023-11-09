
// fucntion declaration
function diwali(){
    console.log("happy diwali ")
}

// function calling
// diwali();
// diwali();
// diwali();

// -----------------------------------

function sum(){
    let a = 10;
    let b = 20;
    console.log(a+b)
}
// sum();

// ----------------------------

// parameterised functions
function sum2(a,b){
    console.log(a+b)
}

sum2(10,30);

// ---------------------------

// NAN
// function kajuLalla(a ,b){
//     console.log(typeof(a+b));
// }
// kajuLalla(250);

// ----------------------
// default paramtereised functions
// function kajuLalla(a , b = 60){
//     console.log(a+b);
// }
// kajuLalla(250);

// ---------------------
// default paramtereised functions
// function kajuLalla(a = 60 , b ){
//     console.log(a+b);
// }
// kajuLalla(250);

// ------------------------

// function kajuLalla(a = 60 , b = 100 ){
//     console.log(a+b);
// }
// kajuLalla(250 , 30);
// kajuLalla();

// --------------------------------------
// undefined
// function sam(a){
//     let kaju;
//     console.log(kaju);
//     console.log(a + kaju)
// }

// sam(30);


// ---------------------

// case-1 -> js engine khud undefi dega
// let kaju;
// console.log(kaju);

// case-=2 -> we dont do this in real
// let kaju = undefined;
// console.log(kaju);

// case -3 -> ye coder krega

let kaju = null;
console.log(kaju)

console.log(typeof(kaju)) //object