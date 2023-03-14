numeros=[-2,4,6,10,8,12,45,10,17]
let menor=0
let mayo=0
for (let i = 0; i < 9; i++){
    numeros[i]>menor

    }


function encontrarMenor(numeros){
    //let menor=numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]<menor){
            menor=numeros[i]
        }
        
    }
    console.log("el numero menor es: "+menor)
    if(menor<0){
      vAbsoluto= Math.abs(menor)
      console.log("el valor absoluto de "+menor+" es: "+vAbsoluto)
    }
    
}
encontrarMenor(numeros)