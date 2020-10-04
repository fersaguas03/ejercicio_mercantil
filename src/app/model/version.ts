import { Marca } from './marca';
import { Modelo } from './modelo';

export class Version{
    desc: string;
    codigo: number;
    marca: Marca[];
    modelo: Modelo[];
}