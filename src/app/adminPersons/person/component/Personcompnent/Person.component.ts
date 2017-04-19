import { person } from './../../model/Person';
import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../services/person.service';

@Component({
    moduleId: module.id,
    selector: 'my-person',
    templateUrl: './../../views/person.component.html',
    providers:[PersonService]
})
export class PersonComponent implements OnInit {
    Title ='Listas  de personas';
    lista : person[];
    constructor(private servicio:PersonService) { }
    CargarDatos(){
        this.servicio.getPersons().subscribe(
            rs => this.lista = rs,
            er => console.log(er), 
            () => console.log(this.lista)
         );
    };
    ngOnInit() { }
}