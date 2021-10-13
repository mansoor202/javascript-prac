
/*********Custom Error  *****/

class ValidateInput extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
        this.type = "EmptyInputCheck"

    }
}

let input2 = {
    userName: "Ali23",
    email: "abc@gmail.com",
    password: "1234",
    age: "2002-02-02",
    country: "USA"
}


try {
    for (let value of Object.keys(input2)) {
        if (input2[value] === undefined) {
            throw new ValidateInput(`please provide  ${value}`);


        }
    }
}
catch (err) {
    console.log("Type: ", err.name)
    console.log("Description: ", err.message)
}


/*********** Further extending my own custom error ******/

class ValidateIndividualInput extends ValidateInput {
    constructor(message) {
        super(message);
        this.name = "Something doesn't according to format";
        this.type = "individual Value checking";

    }
}

try {
    let user = input2.userName;
    for (let i = 0; i < user.length; i++) {
        let code = user.charCodeAt(i)
        if (code >= 65 && code <= 90 && code >= 97 && code <= 122) {
            console.log("valid name input")
        }
        else {
            throw new ValidateIndividualInput("only english alphbets are allowed")
        }
    }
}
catch (err) {
    console.log("Type: ", err.name)
    console.log("Description: ", err.message)
}



// Wrapping Errors

function checkValidity(inputValue) {

    for (let value of Object.keys(inputValue)) {
        if (inputValue[value] === undefined) {
            throw new ValidateInput(`please provide  ${value}`);


        }
    }





    let user = inputValue.userName;
    for (let i = 0; i < user.length; i++) {
        let code = user.charCodeAt(i)
        if (code >= 65 && code <= 90 && code >= 97 && code <= 122) {
            console.log("valid name input")
        }
        else {
            return new ValidateIndividualInput("only english alphbets are allowed")
        }
    }
}
   





try{

    checkValidity(input2)
}
catch(err){
    if (err instanceof ValidateInput){
        console.log(err.message)
    }else if(err instanceof ValidateIndividualInput){
        console.log(err.message)
    }

}




