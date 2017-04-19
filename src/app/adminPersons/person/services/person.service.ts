import { ErrorHandler } from '@angular/core';
import { AppError } from './../../../../appconfig/error.config';
import { IAppConfig } from './../../../../appconfig/Iapp.config';
import { APP_CONFIG } from './../../../../appconfig/app.config';
import { person } from '../model/Person';

import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class PersonService {
    constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http:Http) {}
    getPersons() {
        return this.http.get(this.config.apiEndpoint + 'Values')
            .map(response => <person[]>response.json())
            .catch(this.handleError);
    }
     private handleError(error: Response | any){
        let errMsg: string;
        if(error instanceof Response){
            let body = error.json() ||'';
            let err = body || JSON.stringify(body);
            errMsg =`${error.status} - ${error.statusText || ''} ${error}`;
        }
        else{
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(error || 'Server Error');
    };
}