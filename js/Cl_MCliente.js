export class Cl_MCliente {
    constructor({cedula, producto, cantidad, preA, preB, preC}) {
        this.cedula = cedula;
        this.producto = producto;
        this.cantidad = cantidad;
        this.preA = preA;
        this.preB = preB;
        this.preC = preC;
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula;
    }

    set producto(producto) {
        this._producto = producto;
    }

    get producto() {
        return this._producto;
    }

    set cantidad(cantidad) {
        this._cantidad = +cantidad;
    }

    get cantidad() {
        return this._cantidad;
    }

    set preA(preA) {
        this._preA = +preA;
    }

    get preA() {
        return this._preA;
    }

    set preB(preB) {
        this._preB = +preB;
    }

    get preB() {
        return this._preB;
    }

    set preC(preC) {
        this._preC = +preC;
    }

    get preC() {
        return this._preC;
    }

    montoPagar() {
        if (this.producto == "A") {
            return this.cantidad * this._preA;
        } else if (this.producto == "B") {
            return this.cantidad * this._preB;
        } else if (this.producto == "C") {
            return this.cantidad * this._preC;
        } else {
            return 0;
        }
    }
}