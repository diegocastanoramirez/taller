/*PROBLEMA: Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
licencia de software vendida menos el 5% de deducciones por 
impuestos sobre el total devengadp. Codifica un programa que 
calcule e imprima el salario mensual de un vendedor dado;
 */

function calcularSalario(softwareVendido){
    let devengado=(softwareVendido*1500000)+3500000
    let totalPago=devengado-(devengado*0.05)
    return totalPago
}
console.log(calcularSalario(2))