function hola(){
    console.log("Hola");
}

function adios(callback){
    console.log("Adiós");
}

hola(adios(()=>{
    console.log("Finaliza");
}));
// adios(hola(( )=>{
//     console.log("Buenos días");
// }));

