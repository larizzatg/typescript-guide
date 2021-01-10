import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };
  markerColor = 'blue';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude())
    };
  }

  getMarkerContent(): string {
    return `
      <div>
        <h3>Company Name: ${this.name}</h3> 
        <h4>Catch Phrase is ${this.catchPhrase}</h4>
      </div>
    `;
  }
}