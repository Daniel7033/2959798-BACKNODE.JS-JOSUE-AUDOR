function cita(cita, callback) {
    var miCita = "Como yo siempre digo, " + cita;
    callback(miCita); 
}

function cargar(cita) {
    console.log(cita);
}

cita("come tus vegetales!", cargar);

function anio(feliz){
    setTimeout(() =>{
        console.log("feliz año ")
    }, 2000);
}

function numero(){
    consol.log("2025");
    // setTimeout(() =>{
    //     console.log("2025")
    // }, 2000);
}

anio(numero);