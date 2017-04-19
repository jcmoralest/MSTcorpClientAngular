import { Iperson } from './Iperson';

export class person implements Iperson{
    Id: number;
    Nombres: string;
    Apellidos: string;
    IsActive: boolean;
    FechaPago: Date;
    Salario: number;
    ValorComisiones: number;
    ValorPension: number;
    ValorSalud: number;
    PagoNeto: number;
    Observacion?: string;
    private _getnames : string ='';
    constructor(public option: Iperson) {
        this.Id = option.Id;
        this.Nombres = option.Nombres;
        this.Apellidos = option.Apellidos;
        this.IsActive = option.IsActive;
        this.FechaPago = option.FechaPago;
        this.Salario = option.Salario;
        this.ValorComisiones = option.ValorComisiones;
        this.ValorPension = option.ValorPension;
        this.ValorSalud = option.ValorSalud;
        this.PagoNeto = option.PagoNeto;
        this.Observacion = option.Observacion;
    }
    get getnames():string{
        return this.Nombres + '' + this.Apellidos;
    }

};