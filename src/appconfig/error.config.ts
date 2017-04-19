import { IerrorHandler } from './Iapp.error';

export class AppError implements IerrorHandler {
    call(error, stackTrace = null, reason = null) {
    // do something with the exception
    alert ('Funciona');
  };
};