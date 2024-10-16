export class Cl_VCliente {
    constructor(controlador) {
        this.sectionCliente = document.getElementById("sectionCliente");
        this.cedula = document.getElementById("cedula");
        this.producto = document.getElementById("producto");
        this.cantidad = document.getElementById("cantidad");
        this.aceptarCliente = document.getElementById("aceptarCliente");
        this.aceptarCliente.addEventListener("click", () => {
            controlador.aceptarCliente({
                cedula: this.cedula.value,
                producto: this.producto.value,
                cantidad: this.cantidad.value,
                preA: controlador.mtienda.precioA,
                preB: controlador.mtienda.precioB,
                preC: controlador.mtienda.precioC
            });
            this.ocultar();
        });
    }

    mostrar() {
        this.sectionCliente.hidden = false;
    }

    ocultar() {
        this.sectionCliente.hidden = true;
    }
}