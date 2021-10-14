export async function takeInput(){
    let class1=[20,30,32,34,45]
//    let choice=1;
   let choice=2;
   
   if (choice==1){
    let {getMaxNumber} = await import('../js-modules/getMaxNum.js');
    console.log("max num from dynamic imports",getMaxNumber(29,33,...class1))
   }
   else{
    let {getMinNumber} = await import('../js-modules/getMinNum.js');
    console.log("min number from dynamic imports in ",getMinNumber(29,33,...class1))

   }
    
   

}
