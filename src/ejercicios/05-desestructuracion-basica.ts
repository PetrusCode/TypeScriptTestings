
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    any: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        any: 2016,
        autor: 'Ed Sheeran'
    }

}

/*
//Esto es una desestructuracion de objetos
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, any } = detalles;
*/

//Esto es una desestructuracion de objetos segunda forma
const { volumen, segundo, cancion, detalles: { autor, any } } = reproductor;

// console.log('El volumen actual es de :', volumen);
// console.log('El segundo actual es de :', segundo);
// console.log('El cancion actual es de :', cancion);
// console.log('El any actual es de :', any);
// console.log('El autor actual es de :', autor);


const juega: string[] = ['Zelda', 'Pkmn', 'Mario'];

const [[p1], [p2], [p3]] = juega;

console.log('Juego 1:', juega[0]);
console.log('Juego 2:', juega[1]);
console.log('Juego 3:', juega[2]);