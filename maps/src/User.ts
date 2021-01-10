import faker from 'faker';
import { Mappable } from './Map';

// Convention to never use default statements
export class User implements Mappable {
 name: string;
 location: {
   latitude: number;
   longitude: number;
 };
 markerColor = 'purple';
 
 constructor() {
   this.name = faker.name.firstName();
   this.location = {
     latitude: parseFloat(faker.address.latitude()),
     longitude: parseFloat(faker.address.longitude())
   }
 }

 getMarkerContent(): string {
   return `<div><h3>User Name is ${this.name}</h3></div>`;
 }
}

