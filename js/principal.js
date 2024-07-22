/**
 * ESTADIO BARQUISIMETO
 * El Estadio de Cardenales de Lara es uno de los más importantes de Barquisimeto, y tiene
 * una promoción para los asientos Premium (con un precio regular de $20 cada uno): si un
 * aficionado compra al menos 3 entradas, entonces se le otorga un 25% de descuento. Se
 * requiere de un programa que procese la venta de estas entradas Premium, conociéndose
 * de cada aficionado su nombre y la cantidad de entradas a comprar. El programa debe
 * reportar: nombre del aficionado, descuento obtenido y monto final a pagar
 *
 * Ejemplos:
 * cntEntradas=3, entonces el descuento es $15 y el monto a pagar es $45
 * cntEntradas=5, entonces el descuento es $25 y el monto a pagar es $75
 * cntEntradas=2, entonces el descuento es $0 y el monto a pagar es $40
 */
import Cl_Aficionado from "./Cl_aficionado.js";
import Cl_iAficionado from "./Cl_iAficionado.js";

let iAficionado = new Cl_iAficionado(),
  n = iAficionado.leerNombre(),
  cnt = iAficionado.leerCntEntradas(),
  aficionado = new Cl_Aficionado(n, cnt),
  salida = document.getElementById("salida");

salida.innerHTML = iAficionado.reportar(
  aficionado.nombre,
  aficionado.montoPagar(),
  aficionado.descuento()
);
