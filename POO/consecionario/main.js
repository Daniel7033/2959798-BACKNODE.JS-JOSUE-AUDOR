const Vehiculo = require('./vehiculo');
const Cliente = require('./cliente');
const Empleado = require('./empleado');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = (query) => new Promise(resolve => readline.question(query, resolve));

const main = async () => {

    console.log('Registrar datos del cliente:');
    const nombreCliente = await question('Nombre del cliente: ');
    const telefonoCliente = await question('Telefono del cliente: ');
    const emailCliente = await question('Email del cliente: ');
    const presupuestoCliente = await question('Presupuesto: ');

    const cliente = new Cliente(nombreCliente, telefonoCliente, emailCliente, parseInt(presupuestoCliente));

    console.log('Automóvil:');

    const tipoAutoVehiculo = await question('Tipo de automóvil: ');
    const matriculaVehiculo = await question('Número de matrícula: ');
    const color = await question('Color registrado: ');
    const precioVehiculo = await question('Precio del/la ' + tipoAutoVehiculo + ': ');
    const cuota = await question('Cuotas negociables: ');

    const vehiculo = new Vehiculo(cliente, presupuestoCliente, tipoAutoVehiculo, color, parseInt(precioVehiculo), matriculaVehiculo);

    const empleado = new Empleado(cliente, vehiculo, precioVehiculo);
    
    vehiculo.registro(tipoAutoVehiculo, matriculaVehiculo, precioVehiculo);
    vehiculo.cuotas(presupuestoCliente, cuota);
    empleado.vender(presupuestoCliente, cuota);

    readline.close();
};

main();