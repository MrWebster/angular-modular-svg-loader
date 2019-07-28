import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

let serviceNumber = 0;

@Injectable({
  providedIn: 'root'
})
export class SvgLoaderService {

  serviceId: number;
  $shapes = new BehaviorSubject<any[]>([]);
  registeredIcons = {};

  constructor() {
    this.serviceId = serviceNumber;
    serviceNumber++;
  }

  registerSvgDefinition(definition: any) {
    if (this.registeredIcons[definition.symbol.id] === undefined) {
      this.$shapes.next([...this.$shapes.value, definition]);
      this.registeredIcons[definition.symbol.id] = true;
      console.log(this.$shapes.value, this.serviceId);
    } else {
      console.log('icon already registered');
    }
  }

}
