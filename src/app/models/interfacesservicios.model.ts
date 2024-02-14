import { Observable } from "rxjs";
import { ICliente } from "./cliente.model";
import { ILibro } from "./libro.model";

export interface IStorageService {
  AlmacenarDatosCliente(datoscliente:ICliente):void;

  AlmacenarJWT(jwt:string):void;

  RecuperarDatosCliente():Observable<ICliente | null>; 

  RecuperarJWT():Observable<string>;

  OperarElementosPedido(libro:ILibro, cantidad:number, operacion:string):void
  RecuperarElementosPedido():Observable<{libroElemento:ILibro, cantidadElemento:number}[]>
}