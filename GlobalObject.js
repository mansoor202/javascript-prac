//global object that provides functions and variable that are available everywhere

console.log(globalThis)

// output of the above statement showing what gloablThis is generally include

{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
} */}


// setTimeout(()=>{
//     console.log("first function ")
// },2000)
let globalTotal1=100;
let globalTotal2=100;

var addTwoNumbers_1=(a,b)=>{
    return a+b;
}

globalThis.addTwoNumbers_2=(a,b)=>{
    return a+b;
}

// console.log(addTwoNumbers(3,4))

console.log(globalThis.addTwoNumbers_2(3,4)+" "+globalThis.globalTota1,globalTotal2)
// console.log(globalThis.addTwoNumbers_1(3,4))             //didn't get added to global