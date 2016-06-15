import {PipeTransform,Pipe} from 'angular2/core';
import {IPerson} from './person';

@Pipe({
    name:'personfilter'
})

export class PersonFilterPipe implements PipeTransform{
    transform(value: IPerson[],args: string[]): IPerson[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((person: IPerson) =>
            person.firstName.toLocaleLowerCase().indexOf(filter) != -1) : value;        
    }
}