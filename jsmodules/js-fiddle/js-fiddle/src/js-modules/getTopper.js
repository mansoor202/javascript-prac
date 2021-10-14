import '../js-modules/evaluatedModule.js'
export default function getTopper(students) {
    return new Promise((resolve, reject) => {
        let topper={}
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

