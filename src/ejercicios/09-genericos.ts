

/*
    ===== Código de TypeScript =====
*/

//Genericos             //esto es un tipo generico<T>
function queTipoMitype<T>(argumento: T) {
    return argumento;
}

let miString = queTipoMitype('Hola Mundo');
let miNumero = queTipoMitype(100);
let miArray = queTipoMitype([100, 22, 23, 32]);
let miExplicitVal = queTipoMitype<number>(123);
