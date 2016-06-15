import {Component} from 'angular2/core';
import {PersonComponent} from './person/person.component';
import {PersonService} from './person/person.service';

@Component({
    selector: "app-main",
    templateUrl: "app/app.component.html",
    directives: [PersonComponent],
    providers: [PersonService]

})

export class AppComponent{

}