
/*********Custom Error  *****/

class ValidateInput extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

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
        throw new ValidateInput(`please provide  ${value}`);
       
        
    }
  }
}
catch(err){
    console.log("Type: ",err.name)
    console.log("Description: ",err.message)
}


