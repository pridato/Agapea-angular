import { InjectionToken } from "@angular/core";
import { IStorageService } from "../models/interfacesservicios.model";


export const TOKEN_SERVICIO_STORAGE = new InjectionToken<IStorageService>('ClaveStorageServices');