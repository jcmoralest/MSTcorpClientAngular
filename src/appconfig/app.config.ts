import { OpaqueToken } from "@angular/core";
import { IAppConfig } from './Iapp.config';


export const AppConfigLocal : IAppConfig =  {    
    apiEndpoint: "http://localhost:29684/api/" 
};

export let APP_CONFIG = new OpaqueToken("app.config");