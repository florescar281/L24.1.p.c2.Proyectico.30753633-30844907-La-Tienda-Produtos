export class Cl_VTienda {
    constructor(controlador) {
        this.tabla = document.getElementById("table");
        this.sectionTienda = document.getElementById("sectionTienda");
        this.masVendido = document.getElementById("masVendido");
        this.totalAcumulado = document.getElementById("totalAcumulado");
        this.agregarCliente = document.getElementById("agregarCliente");
        this.agregarCliente.addEventListener("click", () => {
            controlador.mostrarVistaCliente();
        })
        this.sectionPrecios = document.getElementById("sectionPrecios");
        this.precioA = document.getElementById("precioA");
        this.precioB = document.getElementById("precioB");
        this.precioC = document.getElementById("precioC");
        this.aceptarPrecio = document.getElementById("aceptarPrecio");
        this.aceptarPrecio.addEventListener("click", () => {
            controlador.consultarPrecios({
                preA: this.precioA.value,
                preB: this.precioB.value,
                preC: this.precioC.value
            });
            this.ocultarPrecios();
        })
    }

    mostrar() {
        this.sectionTienda.hidden = false;
    }

    ocultar() {
        this.sectionTienda.hidden = true;
    }
    ocultarPrecios() {
        this.sectionPrecios.hidden = true;
    }

    mostrarResultado({cedula, producto, cantidad, montoPagar, masVendido, totalAcumulado}) {
        this.tabla.innerHTML += `
        <tr>
            <th>${cedula}</th>
            <th>${producto}</th>
            <th>${cantidad}</th>
            <th>${montoPagar}</th>
        </tr>
        `;
        this.masVendido.innerHTML = masVendido;
        this.totalAcumulado.innerHTML = totalAcumulado;
    }
}