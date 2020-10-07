import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pipeGranizo'})
export class GranizoPipe implements PipeTransform {
    transform(valor) {
        return valor ? 'SI' : 'NO';
    }
}