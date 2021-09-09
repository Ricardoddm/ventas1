import { Title } from "@angular/platform-browser";

export interface Sale{
    /*id_contacto?: number,
    nombre_contacto?: string,
    telefono?: string,
    email?: string,
    rfc?: string*/

    id_venta?: number,
    fecha?: Date,
    id_empresa?: number,
    id_vendedor?: number,
    id_producto?: number,
    subtotal?: number,
    cantidad?: number,
    total?: number   
}