let planetas= [
    {nombrePlaneta:"alderaan", latitud:15, longitud:20, nivelDeOxígeno:25, volumenTotalDelAgua:50},
    {nombrePlaneta:"jupiter", latitud:25, longitud:20, nivelDeOxígeno:10, volumenTotalDelAgua:-4},
    {nombrePlaneta:"saturno", latitud:15, longitud:20, nivelDeOxígeno:45, volumenTotalDelAgua:10},
    {nombrePlaneta:"neptuno", latitud:15, longitud:20, nivelDeOxígeno:-15, volumenTotalDelAgua:60},
]

function Mapasplanetas(planetas){
    let sumaagua=0
    let sumaOxigeno=0
    for (let index = 0; index < planetas.length; index++) {
     sumaagua=sumaagua+planetas[index].volumenTotalDelAgua
     sumaOxigeno=sumaOxigeno+planetas[index].nivelDeOxígeno   
     if(planetas[index].nivelDeOxígeno < 0){
        console.log("NIVEL DE OXIGENO NEGATIVO")
        console.log(planetas[index])
     }
     if(planetas[index].volumenTotalDelAgua <= 0){
        console.log("SIN AGUA")
        console.log(planetas[index])
     }
    }
    console.log("Suma de agua: "+sumaagua)
    console.log("Suma de oxigeno: "+sumaOxigeno*100)
}
Mapasplanetas(planetas)