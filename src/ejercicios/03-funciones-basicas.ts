
/*
    ===== Código de TypeScript =====

*/
function sumar(a: number, b: number): number {
    return a + b;
}
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}
//documentacion
//const rest = multiplicar(20, 0, 20);
//console.log(rest);


interface PersonajeZELDA {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeZELDA, curacion: number): void {
    personaje.pv += curacion;

    console.log(personaje);

}

const nuevoPersonaje: PersonajeZELDA = {
    nombre: 'Mugino',
    pv: 100,
    mostrarHp() {
        console.log('puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 60);

nuevoPersonaje.mostrarHp();
