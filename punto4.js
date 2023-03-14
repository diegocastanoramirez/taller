// function EnergiaNegativa(energia){
//     let sumNegativa=0
//     energia.forEach(function(energia){
//        if(energia<0){
//         sumNegativa=sumNegativa+1
//        }
      
//     })
//     console.log(sumNegativa)
//     return sumNegativa
    
    
// }
// let energia=[2,-4,-8,5,-6]
// console.log(" los sables con energia negativa: -"+EnergiaNegativa(energia))

////flecha

let EnergiaNegativa=(energia)=>{
    let sumNegativa=0
    energia.forEach((energia)=>{
       if(energia< 0){
        sumNegativa=sumNegativa+1
       }
      
    })
    return sumNegativa
    
}
let energia=[2,-4,-8,5,-6]
console.log(" los sables con energia negativa: -"+EnergiaNegativa(energia))








