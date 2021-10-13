
function spreadSingleArray(){

let marks = [23,34,54,59,23];
console.log( Math.max(...marks) );
}

spreadSingleArray()


function spreadTwoArrays(){

    let class1 = [23,34,54,59,23];
    let class2 = [42,34,30,35,23];
    console.log( Math.max(...class1,...class2) );
    }


spreadTwoArrays()
    