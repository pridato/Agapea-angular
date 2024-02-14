import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponentComponent } from './components/zonaCliente/registro/registro.component';
import { LoginComponentComponent } from './components/zonaCliente/login/login.component';
import { RegistroOKComponent } from './components/zonaCliente/registroOK/registro-ok.component';
import { LibrosComponent } from './components/zonaTienda/libros/libros.component';

const routes: Routes = [
  {path: 'Cliente', 
    children:[
      {path: 'Registro', component: RegistroComponentComponent },
      {path: 'Login', component: LoginComponentComponent},
      {path: 'RegistroOK', component: RegistroOKComponent}
    ]
  },
  {path: 'Tienda',
    children: [
      {path: 'Libros/:idcat?', component: LibrosComponent},
    ]
  },
  {path: '', redirectTo:'Tienda/Libros/?idcat=2-10', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
