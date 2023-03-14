// function calcularSalario(softwareVendido,nombre,mostrarInfo){
//     let devengado=(softwareVendido*1500000)+3500000
//     let totalPago=devengado-(devengado*0.05)
//     let trabajador={
//         nombre:nombre,
//         comision:totalPago
//     }
//     mostrarInfo(trabajador.nombre,trabajador.comision)
// }


// calcularSalario(2,"flavio nelson",function(nombre,comision){
//     console.log("el nombre del trabajador es:"+nombre +"la comision es:"+comision)
// })


////flecha

let calcularSalario=(softwareVendido,nombre,mostrarInfo)=>{
    let devengado=(softwareVendido*1500000)+3500000
    let totalPago=devengado-(devengado*0.05)
    let trabajador={
        nombre:nombre,
        comision:totalPago
    }
    mostrarInfo(trabajador.nombre,trabajador.comision)
}


calcularSalario(2,"flavio nelson",function(nombre,comision){
    console.log("el nombre del trabajador es:"+nombre +"la comision es:"+comision)
})