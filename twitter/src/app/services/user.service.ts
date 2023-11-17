import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  getUserByUsername(username: string): Observable<User | undefined> {
    const foundUser = this.users.find((user) => user.username === username);
    return of(foundUser);
  }

  updateUserProfile(user: User): void {
    const index = this.users.findIndex((u) => u.username === user.username);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
