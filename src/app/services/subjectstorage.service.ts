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

  constructor() { }
  OperarElementosPedido(libro: ILibro, cantidad: number, operacion: string): void {
    throw new Error('Method not implemented.');
  }
  RecuperarElementosPedido(): Observable<{ libroElemento: ILibro; cantidadElemento: number; }[]> {
    throw new Error('Method not implemented.');
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
