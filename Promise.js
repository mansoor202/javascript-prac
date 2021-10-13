let students = {
    "mansoor": 30,
    "shabbir": 20,
    "Subhan ali": 45
}

let topper = {}
function greetings(name, rank) {
    
    console.log(`congratulation ${name}: You stood ${rank} `)
}

function getTopper(students) {
    return new Promise((resolve, reject) => {
        
        let marks = Object.values(students)
        let maxMArks = Math.max(...marks)
        console.log("MAX :", maxMArks)

        let stuArray = Object.entries(students)
        stuArray.forEach(element => {
            if (element[1] == maxMArks) {
                topper.name = element[0];
                topper.rank = "1st"
                resolve(topper);

            }



        })
        reject("couldn't resolve")



    });
}


getTopper(students).then((res)=>{
    greetings(res.name,res.rank);
})
.then(()=>{
    console.log("you are promoted to next standard")
})
.then(()=>{
    console.log("you can get scholarship")
})
.catch((err)=>{
    console.log("some problem arisen :",err)
})

// *************** just a random promise that will always reject

function rejectPromise(){
    return new Promise((resolve,reject)=>{
        reject("rejected")
    })
}

async function makeResult(){

    let topperStudent=await getTopper(students);
    console.log("topper while making result ",topperStudent)
    let rejectedPromise=await rejectPromise().catch(err=>console.log("PRomise is rejected"))
    console.log("just executed after promise rejection")
    


}


makeResult()