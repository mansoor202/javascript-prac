

function getFruits(callback){
    let fruits=["apple","orange","pineapple"]
    callback(fruits)
}

function returnResult(input){
    console.log("Sum :",input);
}
function addNum(returnResult){
    returnResult(7);
    
}
// getFruits(console.log)

function promisify(func){
    return function (){
        return new Promise((resolve,reject)=>{
            try{
                func(resolve)

            }
            catch(err){
                reject(err)
            }

        })
       
    }
}

const promisified1=promisify(getFruits)
promisified1().then(res=>console.log(res))
const promisified2=promisify(addNum)
promisified2().then(res=>console.log(res))