import { IDireccion } from "./direccion.model";
import { ILibro } from "./libro.model";

export interface IPedido {
  fechaPedido:          Date;
  estadoPedido:         string;
  elementosPedido:      [
      {
          libroElemento:    ILibro,
          cantidadElemento: number,
      }
  
  ];
  subTotalPedido:       number;
  gastosEnvio:          number;
  totalPedido:          number;
  direccionEnvio:       IDireccion;
  direccionFacturacion: IDireccion;
}