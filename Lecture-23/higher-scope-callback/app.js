// var a = 10;
// let b = 100;

// function kajuLalla(){
//     let c = "sam";
//     console.log(c);
// }
// kajuLalla();
// console.log(a)
// console.log(b)



// ---------------


// var a = 100;
// let b = 10;

// function fun(){
//     console.log(a)
//     let a = 1000;
//     console.log(a);
// }
// fun();
// console.log(a)
// console.log(b)

// ------------------

// var a = 100;
// let b = 10;

// if(true){
//     console.log(a)
//     var a = 1000;
//     let b = 2000;
//     console.log(a);
//     console.log(b);
// }

// console.log(a)
// console.log(b)

//first class citizens
// let bhai = function sam(){
//     console.log('helllo')
// }

// sam();



// ------------------------

function fun1(fn){
    console.log('fun1');
    fn();
}

function fun2(){
    console.log('fun2')
}

fun1(fun2); //hof

// ---------------------
function fun1(){
    console.log("inside fun 1");
    function fun2(){
        console.log("inside fun 2")
    }
    return fun2;
}

let returnedValue = fun1();
returnedValue()






