export default class Cl_aficionado {
  constructor(nombre, cntEntradas) {
    this.nombre = nombre;
    this.cntEntradas = cntEntradas;
  }
  set nombre(n) {
    this._nombre = n;
  }
  get nombre() {
    return this._nombre;
  }
  set cntEntradas(n) {
    this._cntEntradas = n;
  }
  get cntEntradas() {
    return this._cntEntradas;
  }
  descuento() {
    if (this.cntEntradas >= 3) return this.precioRegular() * 0.25;
    else return 0;
  }
  precioRegular() {
    return this.cntEntradas * 20;
  }
  montoPagar() {
    return this.precioRegular() - this.descuento();
  }
}
