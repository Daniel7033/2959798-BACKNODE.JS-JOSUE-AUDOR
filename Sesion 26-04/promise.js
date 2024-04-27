/* promise 1
function instructor(aprendiz){
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("¿El encapsulamiento es un pilar de POO?");
        console.log("Respuesta: " + aprendiz);
        if (aprendiz !== true) {
            reject(new Error("Incorrecto."));
        } else {
            let respuesta = "correcta";
            resolve(respuesta);
        }
    }, 2000);
    });
}
       //true o false
instructor(true).then((respuesta) =>{
    console.log("Su respuesta es " + respuesta);
}).catch((error)=>{
    console.error(error.message);
});
*/

function instructor(continuar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            while (continuar !== "no") {
                alert("Comencemos el examen");
                let res1 = prompt("1. ¿HTML y CSS son lenguajes de programación?", "Respuesta")
                if (res1 !== "true") {
                    reject(new Error("Incorrecto."));
                    continuar = prompt("¿Quieres seguir?", "Respuesta")
                    if (continuar == "Si" || continuar == "si") {
                        let res2 = prompt("2. ¿La herencia hace parte de Bases de Datos DML?", "Respuesta")
                        if (res2 !== "false"){
                            reject(new Error("Incorrecto."));
                            continuar = prompt("¿Quieres seguir?", "Respuesta")
                            if (continuar == "Si" || continuar == "si"){
                                let res3 = prompt("3. ¿Que hace un callback?", "Respuesta");
                                if (res3 !== "llama a una funcion desde un parametro") {
                                    reject(new Error("Incorrecto"));
                                    alert("Eso es todo");
                                    alert("bye")

                                } else {
                                    let correcto = "correcto";
                                    resolve(correcto);
                                    alert("Eso es todo");
                                        alert("bye")
                                }
                            } else {
                            }
                        } else {
                            let correcto = "correcto";
                            resolve(correcto);
                            continuar = prompt("¿Quieres seguir?", "Respuesta")
                            if (continuar == "Si" || continuar == "si"){
                                let res3 = prompt("3. ¿Que hace un callback?", "Respuesta");
                                if (res3 !== "llama a una funcion desde un parametro"){
                                    reject(new Error("Incorrecto"));
                                    alert("Eso es todo");
                                        alert("bye")
                                } else {
                                    let correcto = "correcto";
                                    resolve(correcto);
                                    alert("Eso es todo");
                                    alert("bye");
                                }
                            } else {
                            }
                        }
                    } else {
                    }
                } else {
                    let correcto = "correcto";
                    resolve(correcto);
                    continuar = prompt("¿Quieres seguir?", "Respuesta")
                    if (continuar == "Si" || continuar == "si") {
                        let res2 = prompt("2. 1¿La herencia hace parte de Bases de Datos DML?", "Respuesta")
                        if (res2 !== "false"){
                            reject(new Error("Incorrecto."));
                            continuar = prompt("¿Quieres seguir?", "Respuesta")
                            if (continuar == "Si" || continuar == "si"){
                                let res3 = prompt("3. ¿Que hace un callback?", "Respuesta");
                                if (res3 !== "llama a una funcion desde un parametro") {
                                    reject(new Error("Incorrecto"));
                                    alert("Eso es todo");
                                    alert("bye");
                                } else {
                                    let correcto = "correcto";
                                    resolve(correcto);
                                    alert("Eso es todo");
                                    alert("bye");
                                }
                            } else {
                            }
                        } else {
                            let correcto = "correcto";
                            resolve(correcto);
                            continuar = prompt("¿Quieres seguir?", "Respuesta")
                            if (continuar == "Si" || continuar == "si"){
                                let res3 = prompt("3. 1¿Que hace un callback?", "Respuesta");
                                if (res3 !== "llama a una funcion desde un parametro"){
                                    reject(new Error("Incorrecto"));
                                    alert("Eso es todo");
                                    alert("bye");
                                } else {
                                    let correcto = "correcto";
                                    resolve(correcto);
                                    alert("Eso es todo");
                                    alert("bye");
                                }
                            } else {
                                alert("bye");
                            }
                        }
                    } else {
                        alert("bye")
                    }
                }
            }

        }, 1000);
    });
}
instructor("si").then((correcto) =>{
    alert(correcto);
}).catch((error)=>{
    error(error.message);
});