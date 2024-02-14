import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './components/zonaCliente/login/login.component';
import { RegistroComponentComponent } from './components/zonaCliente/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroOKComponent } from './components/zonaCliente/registroOK/registro-ok.component';
import { RestnodeService } from './services/restnode.service';
import { ComprobarexistemailDirective } from './directives/comprobarexistemail.directive';
import { EmailfilterdomainDirective } from './directives/emailfilterdomain.directive';
import { TOKEN_SERVICIO_STORAGE } from './services/injectiontokenstorageservice';
import { SubjectstorageService } from './services/subjectstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistroComponentComponent,
    RegistroOKComponent,
    ComprobarexistemailDirective,
    EmailfilterdomainDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RestnodeService,
    {provide: TOKEN_SERVICIO_STORAGE, useClass: SubjectstorageService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
