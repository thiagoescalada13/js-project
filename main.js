const reales = 70
const dolares = 1000
const pesoUruguayo = 9

let operacion = () =>{
  moneda = prompt('Ingresa la moneda a la que queres convertir', 'dolares, reales, peso uruguayo')
} 

let dato = () => {
    pesos = Number(prompt('Ingresa la cantidad de pesos que queres convertir'))
    while(isNaN(pesos)){
        alert("???")
        pesos = Number(prompt('Volve a ingresar la cantidad de pesos'))
    }
}

let convertirCalculo = (a, b) => a / b;

operacion()

while (moneda) {
    switch (moneda) {
        case 'dolares':
            dato();
            alert('tu resultado es ' + convertirCalculo(pesos, dolares))
            console.log('el resultado fue' + convertirCalculo(pesos, dolares))
            break;
        case 'reales':
            dato();
            alert('tu resultado es ' + convertirCalculo(pesos, reales))
            console.log('el resultado fue' + convertirCalculo(pesos, reales))
            break;
        case 'peso uruguayo':
            dato();
            alert('tu resultado es ' + convertirCalculo(pesos, pesoUruguayo))
            console.log('el resultado fue' + convertirCalculo(pesos, pesoUruguayo))
            break;
        default:
            alert('No se especifico nada')
            break;
    }
    operacion()
}













