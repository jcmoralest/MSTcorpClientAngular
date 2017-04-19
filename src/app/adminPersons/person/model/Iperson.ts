export interface Iperson {
    Id: number,
    Nombres: string ,
    Apellidos: string,
    IsActive: boolean,
    FechaPago: Date,
    Salario: number,
    ValorComisiones: number,
    ValorPension: number,
    ValorSalud: number,
    PagoNeto: number,
    Observacion?: string
};
