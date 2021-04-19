

/*
    ===== Código de TypeScript =====
*/

//Constructores y clases en typescript
class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}
class Heroe extends PersonaNormal {
    // private alterEgo: string;
    // public edad: number
    // static nombreReal: number;

    constructor(

        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'NY');
    }

}
interface SuperHeroe1 {
    nombre?: string;
    edad?: number;
    direccion?: Direccion,

}


const spiderman = new Heroe("ironman", 12, 'Uger');
const ironman: SuperHeroe1 = {};

console.log(spiderman);