// numeros=[8,4,-1,6,10,3,45,-8,17]
// let menor=[]
// let mayor=[]
// for (let i = 0; i < numeros.length; i++){
//     if(numeros[i]>0){
//         mayor.push(numeros[i])
//     }else if(numeros[i]<0)
//         menor.push(numeros[i])
//     }
// let cercano=mayor[0]
// function encontrarMenor(mayor){
    
//     for (let i = 1; i < mayor.length; i++) {
//         if(parseInt(mayor[i]) < parseInt(cercano)){
//             cercano=mayor[i]
//         } 
//     }
  
// }
// let cercanoMenor=menor[0]
// function encontrarMenorNegativo(menor){
    
//     for (let i = 1; i < menor.length; i++) {
//         if(parseInt(menor[i]) > parseInt(cercanoMenor) ){
//             cercanoMenor=menor[i]
//         } 
//     }
    
// }
//  encontrarMenor(mayor)
//  encontrarMenorNegativo(menor)

// let vAbsoluto= Math.abs(cercanoMenor)
// if(vAbsoluto<cercano){
//     console.log("el numero mas cerca a 0 es  "+cercanoMenor+" el valor absoluto es : "+vAbsoluto)
// }else if(vAbsoluto>cercano){
//     console.log("el numero mas cerca es: "+cercano)
// }else{
//     console.log("los numeros mas cercanos a 0 son "+cercanoMenor+" y  "+cercano)
// }


////// flecha

numeros=[8,4,-1,6,10,3,45,-8,17]
let menor=[]
let mayor=[]
for (let i = 0; i < numeros.length; i++){
    if(numeros[i]>0){
        mayor.push(numeros[i])
    }else if(numeros[i]<0)
        menor.push(numeros[i])
    }
let cercano=mayor[0]
 let encontrarMenor=(mayor)=>{
    
    for (let i = 1; i < mayor.length; i++) {
        if(parseInt(mayor[i]) < parseInt(cercano)){
            cercano=mayor[i]
        } 
    }
  
}
let cercanoMenor=menor[0]
let encontrarMenorNegativo= (menor)=>{
    
    for (let i = 1; i < menor.length; i++) {
        if(parseInt(menor[i]) > parseInt(cercanoMenor) ){
            cercanoMenor=menor[i]
        } 
    }
    
}
 encontrarMenor(mayor)
 encontrarMenorNegativo(menor)

let vAbsoluto= Math.abs(cercanoMenor)
if(vAbsoluto<cercano){
    console.log("el numero mas cerca a 0 es  "+cercanoMenor+" el valor absoluto es : "+vAbsoluto)
}else if(vAbsoluto>cercano){
    console.log("el numero mas cerca es: "+cercano)
}else{
    console.log("los numeros mas cercanos a 0 son "+cercanoMenor+" y  "+cercano)
}