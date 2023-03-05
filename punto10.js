//llenar los 300 alimentos
let alimentos = []

for(let i=1;i<=10;i++){
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
let posicion =-1
///funcion principal
function alimentosDieta(alimentos,callback){
    setTimeout(function(){
        let seleccionDieta = alimentos.filter(function(alimento){
            return alimento.tipo=='vegetal' && alimento.energia>200//
        })
        callback(seleccionDieta)
    },5000)

}
//llamando funcion
let sumEnergia=0;
alimentosDieta(alimentos,function(seleccionDieta){
    console.log(alimentos[90])
    console.log(alimentos[101])
    console.log(alimentos[201])
    console.log(seleccionDieta)

    for(let i=0;i<seleccionDieta.length;i++){
        sumEnergia=sumEnergia+seleccionDieta[i].energia
    }
    console.log(`la sumatoria final es ${sumEnergia}`)
    
})
