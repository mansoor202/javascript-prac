// const { resolve } = require('path/posix');
const readline = require('readline');

const readFromStdin = () => new Promise(resolve => {
  const readInterface = readline.createInterface({
    input: process.stdin
  });

  readInterface.question('hello there', answer => {
    readInterface.close();
    resolve(answer);
  });
});

function checkInteger(num){
  return new Promise((resolve,reject)=>{
    try{
        num=parseInt(num);
        console.log("converted to integer")
        resolve (num);
        }
        catch(err){
            console.log("please enter an integer")
            reject("couldn't convert")
    
        }

  })
   
}

function addNumbers(a,b){
    console.log("Enter number")
    let num1,num2;
    readFromStdin('me').then(thing => {
       
        num1=thing;
        checkInteger(num1).then((res)=>{
            num1=res;
            console.log("enter 2nd number");
            readFromStdin('me').then(input)



        }).catch(err=>{
            console.log(`Couldn't parse it ${err}`)
        })
       
    
    
    });
    
}

addNumbers()