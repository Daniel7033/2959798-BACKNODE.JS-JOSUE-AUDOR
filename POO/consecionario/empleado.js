const Vehiculo = require('./vehiculo');


class Empleado extends Vehiculo{
    constructor(cliente, vehiculo, precio, nombre, telefono, email){
        super(precio);
        this.cliente = cliente; //Obtengo los datos de cliente
        this.vehiculo = vehiculo; //Obtengo los datos vehiculo
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    
    vender(presupuesto, cuota){
        if(presupuesto > this.vehiculo.precio) {
            this.cliente.presupuesto -= this.vehiculo.precio;
            console.log(`Compra exitosa!
            Tiular: ${this.cliente.nombre} \n
            Vehiculo: ${this.vehiculo.tipoAuto} \n
            Pagar: ${this.vehiculo.precio} por ${cuota} \n
            Matricula: ${this.vehiculo.matricula}
            `);
        } else {
            console.log(`Presupuesto insuficiente en su compra.`);
        }
    }
}
module.exports = Empleado;