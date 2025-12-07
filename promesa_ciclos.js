function promesas(n){
    let respuesta = [];
    for (let i = 0; i < n ; i++) {
        respuesta.push(new Promise((resolve, reject) => {resolve("ok")}));
    }
    return respuesta; 
}

