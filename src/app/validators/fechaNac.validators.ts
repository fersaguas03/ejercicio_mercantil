import { AbstractControl } from '@angular/forms';

export function fechaNacValidator(control: AbstractControl) {
    let value = control.value;
    let fechaHoy = new Date();
    let fechaNac = new Date(value);
    let anio = fechaHoy.getFullYear() - fechaNac.getFullYear();
    let min = 18;
    let max = 99;
    if ((anio > min + 1)&&( anio < max)) {
        return null;
    }
    let m = fechaHoy.getMonth() - fechaNac.getMonth();
    if (m < 0 || (m === 0 && fechaHoy.getDate() < fechaNac.getDate())) {
        anio--;
    }
    let result = (anio >= min && anio <= min) ? null : { 'fechaInvalida': true };
    return result;
}