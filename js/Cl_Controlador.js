import {Cl_VTienda} from "./Cl_VTienda.js";
import {Cl_MTienda} from "./Cl_MTienda.js";
import {Cl_VCliente} from "./Cl_VCliente.js";
import {Cl_MCliente} from "./Cl_MCliente.js";

export class Cl_Controlador {
    constructor() {
        this.vTienda = new Cl_VTienda(this);
        this.vCliente = new Cl_VCliente(this);
        this.mtienda = null;
        this.mostrarVistaTienda();
    }

    mostrarVistaTienda() {
        this.vTienda.mostrar();
        this.vCliente.ocultar();
    }

    mostrarVistaCliente() {
        this.vCliente.mostrar();
        this.vTienda.ocultar();
    }

    consultarPrecios({preA, preB, preC}) {
        if (this.mtienda == null) {
            this.mtienda = new Cl_MTienda({preA, preB, preC});
        }
    }


    aceptarCliente({cedula, producto, cantidad, preA, preB, preC}) {
        let cliente = new Cl_MCliente({cedula, producto, cantidad, preA, preB, preC});
        this.mtienda.procesarCliente(cliente);
        this.vTienda.mostrarResultado({
            cedula: cliente.cedula,
            producto: cliente.producto,
            cantidad: cliente.cantidad,
            montoPagar: cliente.montoPagar(),  
            masVendido: this.mtienda.devolverMayor(),
            totalAcumulado: this.mtienda.devolverTotalFinal()
        });
        this.mostrarVistaTienda();
    }
}