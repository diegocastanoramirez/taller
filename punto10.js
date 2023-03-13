// //llenar los 300 alimentos
// let alimentos = []

// for(let i=1;i<=300;i++){
//     //crear verduras
//     if(i<=100){
//         /// tipos alimentos 
//         let tiposAlimentos =["guayaba"," maracuyá", "feijoa", "lulo", "naranja"," mandarina", "tomate de árbol", "manzana", "granadilla", "sandía"," pitaya"]
//         let alimento = Math.floor(Math.random()*tiposAlimentos.length);

//         ///nivel de energia
//         let min = 100;
//         let max = 500;
//         let nivelEnergía =Math.floor((Math.random()*(max-min +1))
//         +min);

//         alimentos.push({nombre:tiposAlimentos[alimento],tipo:"vegetal",energia:nivelEnergía})
//     }

//     else if(i<=200){
//         /// tipos alimentos 
//         let tiposAlimentos =["oso","perro", "gato", "tigre","zorro","camaleon", "armadillo", "leon", "ardilla", "pajaro","culebra"]
//         let alimento = Math.floor(Math.random()*tiposAlimentos.length);

//         ///nivel de energia
//         let min = 100;
//         let max = 500;
//         let nivelEnergía =Math.floor((Math.random()*(max-min +1))
//         +min);

//         alimentos.push({nombre:tiposAlimentos[alimento],tipo:"animal",energia:nivelEnergía})
//     }

//     else if(i<=300){
//         /// tipos alimentos 
//         let tiposAlimentos =["hormiga","sancudo","libelula","cucarron","mantis","mosco","avejas","avispas", "grillo", "saltamonte","pulgas"]
//         let alimento = Math.floor(Math.random()*tiposAlimentos.length);

//         ///nivel de energia
//         let min = 100;
//         let max = 500;
//         let nivelEnergía =Math.floor((Math.random()*(max-min +1))
//         +min);
        
//         alimentos.push({nombre:tiposAlimentos[alimento],tipo:"insecto",energia:nivelEnergía})
//     }

    
// }
// ///funcion principal
// function alimentosDieta(alimentos,callback){
//     setTimeout(function(){
//         let vegetalesDieta = alimentos.filter(function(alimento){
//             return alimento.tipo=='vegetal' && alimento.energia>200//
//         })
//         callback(vegetalesDieta)
//     },5000)

// }
// //llamando funcion
// let sumEnergia=0;
// alimentosDieta(alimentos,function(vegetalesDieta){
//     console.log(vegetalesDieta)

//     for(let i=0;i<vegetalesDieta.length;i++){
//         sumEnergia=sumEnergia+vegetalesDieta[i].energia
//     }
//     console.log(`la sumatoria final es ${sumEnergia}`)
    
// })



///////flecha

//llenar los 300 alimentos
let alimentos = []

for(let i=1;i<=300;i++){
    //crear verduras
    if(i<=100){
        /// tipos alimentos 
        let tiposAlimentos =["guayaba"," maracuyá", "feijoa", "lulo", "naranja"," mandarina", "tomate de árbol", "manzana", "granadilla", "sandía"," pitaya"]
        let alimento = Math.floor(Math.random()*tiposAlimentos.length);

        ///nivel de energia
        let min = 100;
        let max = 500;
        let nivelEnergía =Math.floor((Math.random()*(max-min +1))
        +min);

        alimentos.push({nombre:tiposAlimentos[alimento],tipo:"vegetal",energia:nivelEnergía})
    }

    else if(i<=200){
        /// tipos alimentos 
        let tiposAlimentos =["oso","perro", "gato", "tigre","zorro","camaleon", "armadillo", "leon", "ardilla", "pajaro","culebra"]
        let alimento = Math.floor(Math.random()*tiposAlimentos.length);

        ///nivel de energia
        let min = 100;
        let max = 500;
        let nivelEnergía =Math.floor((Math.random()*(max-min +1))
        +min);

        alimentos.push({nombre:tiposAlimentos[alimento],tipo:"animal",energia:nivelEnergía})
    }

    else if(i<=300){
        /// tipos alimentos 
        let tiposAlimentos =["hormiga","sancudo","libelula","cucarron","mantis","mosco","avejas","avispas", "grillo", "saltamonte","pulgas"]
        let alimento = Math.floor(Math.random()*tiposAlimentos.length);

        ///nivel de energia
        let min = 100;
        let max = 500;
        let nivelEnergía =Math.floor((Math.random()*(max-min +1))
        +min);
        
        alimentos.push({nombre:tiposAlimentos[alimento],tipo:"insecto",energia:nivelEnergía})
    }

    
}
///funcion principal
let alimentosDieta=(alimentos,callback)=>{
    setTimeout(()=>{
        let vegetalesDieta = alimentos.filter(function(alimento){
            return alimento.tipo=='vegetal' && alimento.energia>200//
        })
        callback(vegetalesDieta)
    },5000)

}
//llamando funcion
let sumEnergia=0;
alimentosDieta(alimentos,(vegetalesDieta)=>{

    console.log(vegetalesDieta)

    for(let i=0;i<vegetalesDieta.length;i++){
        sumEnergia=sumEnergia+vegetalesDieta[i].energia
    }
    console.log(`la sumatoria final es ${sumEnergia}`)
    
})
