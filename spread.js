
function spreadSingleArray(){

let marks = [23,34,54,59,23];
console.log( Math.max(...marks) );
}

spreadSingleArray()


function spreadTwoArrays(){

    let max=90;
    let min=3;
    let class1 = [23,34,54,59,23];
    let class2 = [42,34,30,35,23];
    console.log( Math.max(max,...class1,...class2,min) );
    }


spreadTwoArrays()


//receiving rest parameters

function maxAge(age1,age2,...remainings){
    let max;
    max=(age1>age2) ? age1:age2;
    if (remainings.length==0){
        
        console.log(`max age is ${max}`);
        return;
        
    }
    else{
       
       maxOfArray=Math.max(...remainings);
       max=(max>maxOfArray) ? max:maxOfArray;
        
    }
    
    console.log(`max of all given numbers is  ${max}`);
}
 

maxAge(23,12,23,34,29)