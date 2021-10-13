let students = {
    "mansoor": 30,
    "shabbir": 20,
    "Subhan ali": 45
}



function greetings(name, rank) {
    console.log(`congratulation ${name}: You stood ${rank} `)
}


function getTopper(students,greetings) {


    let marks = Object.values(students)
    let maxMArks = Math.max(...marks)
    console.log("MAX :", maxMArks)

    let stuArray = Object.entries(students)
    stuArray.forEach(element => {
        if (element[1] == maxMArks) {
          greetings(element[0],"1st")


        }



    })




};

getTopper(students,greetings)