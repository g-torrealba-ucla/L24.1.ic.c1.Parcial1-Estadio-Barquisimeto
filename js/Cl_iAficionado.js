export default class Cl_iAficionado {
  leerNombre() {
    return prompt("Ingresa el nombre del aficionado");
  }
  leerCntEntradas() {
    return prompt("Ingresa la cantidad de entradas a comprar");
  }
  reportar(nombre, montoPagar, descuento) {
    return `El nombre del aficionado: ${nombre}
            <br>El monto final a pagar: $${montoPagar}
            <br>Descuento obtenido: $${descuento}`;
  }
}
