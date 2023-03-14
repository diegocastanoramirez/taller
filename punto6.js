//        let edades=[]
//     for (let i = 0; i < 20; i++) {
//         edades[i] = Math.floor(Math.random() * 50);
//         edades.push(edades[i])
//     }

//     let mayor=0;
 
//     for (let i = 0; i < 20; i++){
//         if(edades[i]>mayor){
//             mayor=edades[i];
//         }
//     }
//     let repite = 0;
//     for (let i = 0; i < 20; i++){
//         if(edades[i]>mayor){
//             repite=repite+1;
//         }
//     }

// return (console.log(edades+" "+" ---el numero mayor es: "+mayor+" las veces que se repite es: "+repite))
  

///flecha

let edades=[]
for (let i = 0; i < 20; i++) {
    edades[i] = Math.floor(Math.random() * 50);
    edades.push(edades[i])
}

let mayor=0;

for (let i = 0; i < 20; i++){
    if(edades[i]>mayor){
        mayor=edades[i];
    }
}
let repite = 0;
for (let i = 0; i < 20; i++){
    if(edades[i]>mayor){
        repite=repite+1;
    }
}

return (console.log(edades+" "+" ---el numero mayor es: "+mayor+" las veces que se repite es: "+repite))

  