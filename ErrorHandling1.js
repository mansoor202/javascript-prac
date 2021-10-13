/************ Trying to get English alphabets only  *****/

let input="mansoor2"
try{
    for (let i=0;i<input.length;i++){
        let code=input.charCodeAt(i) 
        if (code >=65 && code <=90 && code >=97 && code <=122){
            console.log("valid name input")
        }
        else{
            throw new Error("only english alphbets are allowed")
        }

    }
    
}
catch(err){
    console.log(err.message)
}