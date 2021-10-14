 var input0="jack"
 let input1="johnson"
 let input2="Mikal23"
function checkAlphabetsOnly(input){
    return new Promise((resolve,reject)=>{

        try{
            for (let i=0;i<input.length;i++){
                let code=input.charCodeAt(i)
                if ((code >=65 && code <=90) || (code >=97 && code <=122)){
                    continue;
                }
                else{
                    throw new Error("only english alphbets are allowed");
                }
        
            }
            resolve (input)
            
        }
        catch(err){
           
            reject (err)
        }
        

    })

  
}

function checkLength(input,minLength){
    return new Promise((resolve,reject)=>{
        try{
         if(input.length>=minLength){
             resolve(input)
         }
         else{
             throw new Error(`password should be ${minLength} chars long`)
         }
        }
        catch(err){
            reject(err.message);
        }

    })

}

// checkAlphabetsOnly("Tajamal")
// .then(input=>console.log("valid input :",input))
// .catch(err=>console.log(err.message))

// checkLength("Tajamal")
// .then(res=>console.log("Full length password okay! ",res))
// .catch(err=>console.log(err))


// Promise.all([
//     checkAlphabetsOnly(input1),
//     checkLength(input1,5)
// ])
// .then(res=>{
//     console.log("promise.all resolved")
//     console.log(res.length)
//     globalThis.input0=res[0]
  
//     console.log("valid input assigned ",globalThis.input0)
 
// })
// .catch(err=>console.log(err))

Promise.race([
    checkAlphabetsOnly(input1),
    checkLength(input1,5)
])
.then(res=>{
    console.log("promise.any resolved")
        console.log(res.length,res)
        globalThis.input0=res[0]
      
  
     
 
})
.catch(err=>console.log("promise.any failed"))
