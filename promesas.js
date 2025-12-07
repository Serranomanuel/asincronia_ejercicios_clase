let base = 5;

function multiplica(base, multiplicador) {
    return new Promise((resolve, reject) => {
        const item = `${base} x ${multiplicador} = ${base * multiplicador}`;
        console.log(item);
        if (multiplicador == 10) {
            reject("Se ha llegado al límite de la multiplicación");
        } else {
            console.log("Finalizado");
            resolve(multiplica(base, multiplicador + 1));
        }   
});
}

// multiplica(base, 1)
//     .then(() => multiplica(base, 2))
//     .then(() => multiplica(base, 3))
//     .then(() => multiplica(base, 4))
//     .then(() => multiplica(base, 5))
//     .then(() => multiplica(base, 6))
//     .then(() => multiplica(base, 7))
//     .then(() => multiplica(base, 8))
//     .then(() => multiplica(base, 9))
//     .then(() => multiplica(base, 10))
//     .catch(err => console.log(err));

multiplica(base, 1)
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .then(respuesta => {
        return multiplica(base, respuesta);
    })
    .catch(err => console.log(err));