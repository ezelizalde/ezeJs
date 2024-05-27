let deuda = 50000
let cuotas = 12
let cuotaMensual = calculoCuota(deuda, cuotas);

function calculoCuota(deuda, cuotas){
    if (cuotas, deuda <= 0) {
        return "el numero debe ser mayor que 0"
    }

    let cuotaMensual = deuda / cuotas
        return cuotaMensual

}
console.log(`La cuota mensual es de ${cuotaMensual.toFixed(2)}`)
