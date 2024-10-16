export class Cl_MTienda {
    constructor({preA, preB, preC}){
        this.mayor = 0;
        this.auxNomProduc = " ";
        this.acumTotal = 0;
        this.acumProducA = 0;
        this.acumProducB = 0;
        this.acumProducC = 0;
        this.precioA = preA;
        this.precioB = preB;
        this.precioC = preC;
    }

    procesarCliente(cli){
        this.acumTotal += cli.montoPagar();

        if(cli._producto == "A"){
            this.acumProducA += cli._cantidad;
        } else if(cli._producto == "B"){
            this.acumProducB += cli._cantidad;
        } else if(cli._producto == "C"){
            this.acumProducC += cli._cantidad;
        }

        if(this.acumProducA > this.mayor){
            this.mayor = this.acumProducA;
            this.auxNomProduc = cli._producto;
        } else if(this.acumProducB > this.mayor){
            this.mayor = this.acumProducB;
            this.auxNomProduc = cli._producto;
        } else if(this.acumProducC > this.mayor){
            this.mayor = this.acumProducC;
            this.auxNomProduc = cli._producto;
        }
    }

    devolverTotalFinal(){
        return this.acumTotal;
    }

    devolverMayor(){
        return this.auxNomProduc;
    }
}