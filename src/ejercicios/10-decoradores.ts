

/*
    ===== Código de TypeScript =====
*/
//Decoradores de clases

function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}


@classDecorator
class miClasedecorada {
    public unaPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola ');
    }
}

console.log(miClasedecorada);

const nuevaClase = new miClasedecorada()

console.log(nuevaClase.unaPropiedad);