import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestnodeService } from 'src/app/services/restnode.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { IRestMessage } from 'src/app/models/restMessage.model';

@Component({
  selector: 'app-registro-ok',
  templateUrl: './registro-ok.component.html',
  styleUrls: ['./registro-ok.component.css']
})
export class RegistroOKComponent implements OnInit, OnDestroy {
  private subscriber!: Subscription
  constructor(
    private restService: RestnodeService,
    private router: Router,
    private urlrouter: ActivatedRoute,
   
  ) {}

  ngOnInit(): void {
    this.subscriber = this.urlrouter.queryParamMap.subscribe((params:ParamMap) => {
      let _mode = params.get('mode') + '';
      let _oobCode = params.get('oobCode') + '';
      let _apiKey = params.get('apiKey') + '';

      let respuesta = this.restService.activarCuenta(_mode, _oobCode, _apiKey);
      respuesta.subscribe({
        next: (value:IRestMessage) => {
          console.log('datos sacados de node... ', value);
        },
        error: (error) => {
          console.log('errores descubiertos... ', error);
        },
      });
    });
    
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
