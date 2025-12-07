let base = 4;

function multiplica(base, multiplicador, callback) {
    const item = `${base} x ${multiplicador} = ${base * multiplicador}`;
    console.log(item);
    if (multiplicador < 10) {
        console.log("Finalizado");
        return
        } else {
        multiplica(base, multiplicador + 1, callback);
    }
};

multiplica(base, 1, (base, n2, callback) => {
    multiplica(base, n2, (base, n3, callback) => {
        multiplica(base, n3, (  base, n4, callback) => {
            multiplica(base, n4, ( base, n5, callback) => {
                multiplica(base, n5, ( base, n6, callback) => {
                    multiplica(base, n6, ( base, n7, callback) => {
                        multiplica(base, n7, ( base, n8, callback) => {
                            multiplica(base, n8, ( base, n9, callback) => {
                                multiplica(base, n9, ( base, n10, callback) => {
                                    multiplica(base, n10, (base, n11, callback) => {
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }); 
});