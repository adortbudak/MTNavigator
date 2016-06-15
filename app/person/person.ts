import {IDepartment} from '../department/department';
import {ILocation} from '../location/location';

export interface IPerson{
    id: string;
    firstName: string;
    lastName: string;
    department: IDepartment;
    location: ILocation;
}