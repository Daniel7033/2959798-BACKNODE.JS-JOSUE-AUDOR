const Cliente = require('./cliente');

class Vehiculo extends Cliente{
    constructor(cliente, presupuesto, tipoAuto, color, precio, matricula){       
        super(presupuesto);
        this.titular = cliente;
        this.tipoAuto = tipoAuto;
        this.color = color;
        this.precio = precio;
        this.matricula = matricula;
    }

    registro(tipoAuto, matricula, precio){
        console.log(`Vehiculo: ${tipoAuto}.\n
        Matricula: ${matricula} .\n
        Costo: ${precio}  .\n
        ¡${tipoAuto} Registrado..!`);
    }

    cuotas(presupuesto, cuota){
        if (presupuesto < this.precio) {
            console.log('Presupuesto insuficiente.');
        } else {
            this.precio /= cuota;
            console.log(`Precio a cuotas ${this.precio}`);
        }
    }

}

module.exports = Vehiculo;