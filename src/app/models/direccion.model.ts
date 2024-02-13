import { IMunicipio } from "./municipio.model";
import { IProvincia } from "./provincia.model";


export interface IDireccion {
    id:            string;
    calle:         string;
    pais:          string;
    cp:            number;
    provincia:     IProvincia;
    municipio:     IMunicipio;
    esPrincipal:   boolean;
    esFacturacion: boolean;
}