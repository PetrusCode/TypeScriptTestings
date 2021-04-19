/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["Fer", "counter", "curacion"];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;

}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bas', 'counter', 'curacion']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);

/*
    ===== Código de TypeScript =====
*/

