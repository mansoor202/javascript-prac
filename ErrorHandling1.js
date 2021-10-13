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



/********************** 'Form validsation example  */

//object received from front end 

let input2={
    userName:"Ali",
    email:"abc@gmail.com",
    password:"1234",
    age:"2002-02-02",
    country:undefined
}


try{
for (let value of Object.keys(input2)) {
    if (input2[value]===undefined)
    {
        throw new Error(`please provide  ${value}`);
       
        
    }
  }
}
catch(err){
    console.log(err.message)
}
