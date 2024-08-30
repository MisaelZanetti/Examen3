const esCapicua = cadena => {
    for (let i = 0; i < cadena.length / 2; i++) {
        if (cadena[i] !== cadena[cadena.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

const contar = cadenas => {
    let total = 0;
    
};

const cadenas = ['radar', 'hola', 'oso', 'neuquen', 'mundo'];
