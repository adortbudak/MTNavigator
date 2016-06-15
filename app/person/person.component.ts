import {Component,OnInit} from 'angular2/core';
import {IPerson} from './person';
import {PersonService} from './person.service';

@Component({
    selector: 'person',
    templateUrl: 'app/person/person.component.html'
})

export class PersonComponent
    implements OnInit {
        
    constructor(private _personService: PersonService){

    }

    ngOnInit():void{

    }
}