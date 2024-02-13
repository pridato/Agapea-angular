import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/models/cliente.model';
import { IRestMessage } from 'src/app/models/restMessage.model';
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

  constructor(private router:Router, private restService:RestnodeService) {}

  async LoginCliente(loginform:NgForm){
    console.log(loginform.value)
    const _respuesta:IRestMessage = await this.restService.login(loginform.form.value)
  }

  irARegistro(){
    this.router.navigateByUrl('/Cliente/Registro')
  }

  verLogin(value:any){
    console.log(value)
  }
}
