import { IDireccion } from "./direccion.model";
import { IPedido } from "./pedido.model";

export interface ICliente {
  nombre:      string;
    apellidos:   string;
    cuenta:      {  email: string, login?:string, password?:string, cuentaActiva:boolean, imagenAvatarBASE64?:string };
    telefono:    string;
    direcciones?: IDireccion[];
    pedidos?:     IPedido[];
    genero?:     string;
    fechaNacimiento:    Date;
    descripcion?:   string;
}