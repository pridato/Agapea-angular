import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICliente } from '../models/cliente.model';
import { IStorageService } from '../models/interfacesservicios.model';
import { ILibro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectstorageService implements IStorageService{

  private _clienteSubject$:BehaviorSubject<ICliente | null >=new BehaviorSubject<ICliente | null>( null );

  private _jwtSubject$:BehaviorSubject<string>=new BehaviorSubject<string>( '' );

  private _elementosPedidoSubject$:BehaviorSubject<{libroElemento: ILibro, cantidadElemento:number}[]> = new BehaviorSubject<{libroElemento: ILibro, cantidadElemento:number}[]>([])

  constructor() { }
  OperarElementosPedido(libro: ILibro, cantidad: number, operacion: string): void {
    
    let _pos:number = this._elementosPedidoSubject$.value.findIndex(element => element.libroElemento.ISBN13 == libro.ISBN13)

    switch(operacion){
      case "añadir":
        if(_pos != -1){
          this._elementosPedidoSubject$.value[_pos].cantidadElemento += cantidad;
        } else{
          this._elementosPedidoSubject$.value.push({libroElemento : libro,cantidadElemento: 1});
        }
        break;

        case "borrar":
          if(_pos != -1){
            this._elementosPedidoSubject$.value.splice(_pos,1);
          }
          break;

        case "modificar":
          if(_pos != -1){
            if(this._elementosPedidoSubject$.value[_pos].cantidadElemento != 0){
              this._elementosPedidoSubject$.value[_pos].cantidadElemento = cantidad;
            }else{
              this._elementosPedidoSubject$.value.splice(_pos,1);
            }
          }
          break;
    }
  }
  RecuperarElementosPedido(): Observable<{ libroElemento: ILibro; cantidadElemento: number; }[]> {
    return this._elementosPedidoSubject$.asObservable();
  }

  AlmacenarDatosCliente(datoscliente: ICliente): void {
    console.log('insertando...')
    this._clienteSubject$.next(datoscliente);
  }
  AlmacenarJWT(jwt: string): void {
    this._jwtSubject$.next(jwt);
  }
  RecuperarDatosCliente(): Observable<ICliente | null> {
    return this._clienteSubject$.asObservable();
  }
  RecuperarJWT(): Observable<string> {
    return this._jwtSubject$.asObservable();
  }
}
