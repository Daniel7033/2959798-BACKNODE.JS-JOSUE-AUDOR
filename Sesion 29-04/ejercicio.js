// /* 
//     Crear un archivo ejercicio usando:
//     Callback
//     Promise
//     Async await 
//     Async await 
//     Callback anidado
//     Promise encadenada
// */
// //Callbacks
// function a(){
//     console.log("Hola, ¿cómo estás?.");
// }
// function b(res){
//     res(a)
//     console.log("Bien.");
// }
// b(a);

// //Callback anidado
// function tiempo(callback){
//         tiem = "Llegas"
//          callback()
// }
// function espera(){
//     setTimeout(()=>{
//         console.log("Tarde")
//          tiem()
//     }, 1000)
// }
// tiempo(espera(()=>{
//     console.log("Finaliza---");
// }));

// //Promise
// function a2(res){
//     return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("True or False?");
        
//         if (res !== true) {
//             reject(new Error("False."));
//         } else {
//             let respuesta = "True";
//             resolve(respuesta);
//         }
//     }, 2000);
//     });
// }
// //true o false
// a2(false).then((respuesta) =>{
//     console.log("Su respuesta es " + respuesta);
// }).catch((error)=>{
//     console.error(error.message);
// });

// //promise encadenado
// const pr = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Como estas??");   
//         resolve("I'm")
//         reject("I'm not")
//     }, 4000);
// })
// pr.then(function(re, rn){
//     return console.log(`${re} fine! `);
// });
// pr.catch(function(re, rn){
//     return console.error(`${rn} fine..`);
// })

// //async await
// function abcd(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve("What's Up..");
//         }, 4000);
//     })
// }
// async function dcba(){
//     const aaa = await abcd();
//     console.log("Hey " + aaa);
// }
// dcba();
// //async await manejo de errores
// function alm(res1){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Has visto una pelicula?");
//             if (res1 !== "si"){
//                 reject("Tan raro")
//             } else {
//                 const r1 = "Ah que bueno"
//                 resolve(r1)
//             }

//         }, 5000);
//     }
// )
// }

// async function alm2(){
//     try{
//     const res = await alm("no");
//     console.log(res);
//     } catch(error){
//         console.error(error);
//     }
// }
// alm2();