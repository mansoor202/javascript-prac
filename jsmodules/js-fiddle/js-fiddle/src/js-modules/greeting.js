import '../js-modules/evaluatedModule.js'
import getTopperFunc from './getTopper.js'
let students = {
    "mansoor": 30,
    "shabbir": 20,
    "Subhan ali": 45
}
export function greetNow(){
    getTopperFunc(students).then(res=>{
        console.log(`congratulation ${res.name}: You stood ${res.rank} `)
    }).catch(err=>console.log("some error occured"))
    

}