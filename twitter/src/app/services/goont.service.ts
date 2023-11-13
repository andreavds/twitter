import { Injectable } from '@angular/core';
import { Goont } from '../models/goont.model';

@Injectable({
  providedIn: 'root',
})
export class GoontService {
  private goonts: Goont[] = [
    { id: 1, content: 'yo quiero comprar venezuela', author: 'Usuario1', timestamp: new Date() },
    { id: 2, content: 'no puede', author: 'Usuario2', timestamp: new Date() },
    { id: 3, content: 'si', author: 'Usuario1', timestamp: new Date() },
    { id: 4, content: 'no', author: 'Usuario2', timestamp: new Date() },
    { id: 5, content: 'si', author: 'Usuario1', timestamp: new Date() },
    { id: 6, content: 'no', author: 'Usuario2', timestamp: new Date() },
    { id: 7, content: 'si', author: 'Usuario1', timestamp: new Date() },
    { id: 8, content: 'bueno', author: 'Usuario2', timestamp: new Date() },    
  ];

  getGoonts(): Goont[] {
    return this.goonts || [];
  }

  addGoont(goont: Goont): void {
    this.goonts.push(goont);
  }

  getNextGoontId(): number {
    return this.goonts.length + 1;
  }
}
