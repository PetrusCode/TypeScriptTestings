
/*
    ===== Código de TypeScript =====
*/

//Desestructuracion de argumentos

export interface Producto {
    descripcion: string;
    precio: number;

}

const telefono: Producto = {
    descripcion: 'Iphone',
    precio: 260
}

const tableta: Producto = {
    descripcion: 'Ipad Air',
    precio: 180
}

export function calculaImpuestoSobreVenta(producto: Producto[]): [number, number] {

    let total = 0;

    producto.forEach(({ precio }) => {
        total += precio;
    })
    return [total, total * 0.18];

}

const articulos = [telefono, tableta];

const [total, impuestoSobreVenta] = calculaImpuestoSobreVenta(articulos);

console.log('Total: ', total);
console.log('impuestoSobreVenta: ', impuestoSobreVenta);
