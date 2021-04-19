import { calculaImpuestoSobreVenta, Producto } from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {
        descripcion: 'TelefonoMovil',
        precio: 200
    },
    {
        descripcion: 'TelefonoMovi2',
        precio: 400
    }

];

const [total, impuestoSobreVenta] = calculaImpuestoSobreVenta(carritoCompras);

console.log('Total', total);
console.log('Isv', impuestoSobreVenta);