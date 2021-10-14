// promisifying same callback example I did before in callback.js

let students = {
    "mansoor": 30,
    "shabbir": 20,
    "Subhan ali": 45
}



function greetings(name, rank) {
    console.log(`congratulation ${name}: You stood ${rank} `)
}


function getTopper(students) {
    return new Promise((reslove,reject)=>{

        let marks = Object.values(students)
        let maxMArks = Math.max(...marks)
        console.log("MAX :", maxMArks)
    
        let stuArray = Object.entries(students)
        stuArray.forEach(element => {
            if (element[1] == maxMArks) {
              reslove ({
                  name:element[0],
                  marks:maxMArks
              })
    
    
            }
    
    
    
        })
        reject ("couldn't reolve")
    
    

    })

   };

getTopper(students).then(res=>console.log("topper student is ",res));