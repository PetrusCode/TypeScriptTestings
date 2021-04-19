
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireeccion: () => string;

}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}
const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY',

    },
    mostrarDireeccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', '
            + this.direccion.pais;
    }

}
const direccion = superHeroe.mostrarDireeccion();
console.log(direccion);
