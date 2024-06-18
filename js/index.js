

function calcularCuota() {
    let deuda = parseInt(document.getElementById("inputDueda").value);
    let cantidadCuotas = parseInt(document.getElementById("inputCuotas").value);

    if (deuda <= 2 || cantidadCuotas <= 2) {
        alert("Los valores de deuda y cantidad de cuotas deben ser mayores o iguales a 2");
    }
    else (deuda > 2 || cantidadCuotas > 2); {
    let montoCuota = deuda / cantidadCuotas;
    document.getElementById("montoCuota").value = montoCuota.toFixed(2);
    console.log(`La cuota mensual es de ${montoCuota.toFixed(2)}`)
}
}