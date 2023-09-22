//?sistema que mostrara los descuentos hechos de una tienda segun sea el monto que gaste el cliente
let montoCompra;
//se va a repetir el ciclo hasta que el usuario ingrese correctamente los datos
while (true) {
  // pedir al usuario que ingrese monto
  montoCompra = prompt("ingrese el monto de su compra:");

  // evita que el usuario pase sin ingresar un valor
  if (montoCompra === "") {
    console.log("No ingreso ningun monto. Por favor, intente de nuevo.");
    continue;
  }

  //ingresa solo numeros
  if (isNaN(montoCompra)) {
    console.log("el monto ingresado no es un numero valido. por favor, intenta de nuevo.");
    continue;
  }

  break;
}
// pasara numeros a decimales 
montoCompra = parseFloat(montoCompra);


//calculos de los descuentos
let descuento = 0;
if (montoCompra >= 100 && montoCompra <= 300) {
  descuento = montoCompra * 0.05;
} else if (montoCompra > 300 && montoCompra <= 500) {
  descuento = montoCompra * 0.1;
} else if (montoCompra > 500) {
  descuento = montoCompra * 0.15;
}

//descuento hecho
let totalPagar = montoCompra - descuento;

//resultados
console.log("Monto de la compra: €" + montoCompra);
console.log("Descuento aplicado: €" + descuento);
console.log("Total a pagar: €" + totalPagar);
//?-end