/*************  Both name variables are scoped to their blocks  *****/

{
    let name="spaceX";
    console.log(`company1: ${name}`)

}

{
    let name="Microsoft";
    console.log(`company1: ${name}`)

}


/*************************** */


function makeCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
  let Adder1 = makeCounter();
  let Adder2 = makeCounter();

  console.log("First Incremented value by adder1 ",Adder1())
  console.log("Second Incremented value by adder1",Adder1())
  console.log("Incremented value by Adder2",Adder2())


  /*************************** */

let userName = "John";
function sayHi1() {
    return (userName);
  }

sayHi2=function() {
  return (userName);
}

userName = "Pete";

console.log("Updated name is ", sayHi1());
// console.log("Updated name is ", sayHi2());
