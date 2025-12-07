function promesas(n){
    let respuesta = [];
    for (let i = 0; i < n ; i++) {
        if (i % 2 == 0){
            respuesta.push(new Promise((reject, resolver) =>{
                reject("Rechazada");
            }))
        }else{
            respuesta.push(new Promise((resolver, reject) => {
                resolver("Ok")
            }))
        }
    }
    return respuesta; 
}

let respuestas = promesas(9);

Promise.all(respuesta)
    .then((a) => {
        console.log(a);
    })
    .catch((e) => {
        console.log(e);
        
    })