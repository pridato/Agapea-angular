import { Component, Inject, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/models/cliente.model';
import { IStorageService } from 'src/app/models/interfacesservicios.model';
import { IRestMessage } from 'src/app/models/restMessage.model';
import { TOKEN_SERVICIO_STORAGE } from 'src/app/services/injectiontokenstorageservice';
import { RestnodeService } from 'src/app/services/restnode.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentComponent {

  public credenciales: { email: string, password: string} = {email: '', password: ''}
  public errorsLoginServer:string = "";
  public cliente!:ICliente;

  constructor(private router:Router, 
              private restService:RestnodeService, 
              @Inject(TOKEN_SERVICIO_STORAGE) private storageService:IStorageService
              ) 
        {}

  async LoginCliente(loginform:NgForm){
    console.log(loginform.value)
    const _respuesta:IRestMessage = await this.restService.login(loginform.form.value)
    if(_respuesta.codigo === 0){

      this.storageService.AlmacenarDatosCliente(_respuesta.datoscliente || this.cliente)
      this.storageService.AlmacenarJWT(_respuesta.token || '')

      this.router.navigateByUrl('/Tienda/Libros/?idcat=2-10')
    }else{
      console.log(_respuesta)
    }
  }

  irARegistro(){
    this.router.navigateByUrl('/Cliente/Registro')
  }

  verLogin(value:any){
    console.log(value)
  }
}
