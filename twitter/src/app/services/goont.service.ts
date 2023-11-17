import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goont } from '../models/goont.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GoontService {
  private goonts: Goont[] = [];
  private users: User[] = [];

  constructor() {}

  getGoonts(): Observable<Goont[]> {
    return of(this.goonts);
  }

  addGoont(newGoont: Goont): void {
    this.goonts.push(newGoont);
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

}
