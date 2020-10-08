import { Municipio } from './municipio';

export interface Provincia{
    id: string;
    nombre: string
    municipioList: Municipio[];
}