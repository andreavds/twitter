import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = [];

  constructor() {}

  // Obtener usuarios
  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  // Obtener el ID del token
  getUserIdFromToken(token: string): string | undefined {
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.id;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return undefined;
    }
  }

  // Obtener los usuarios por el nombre de usuario
  getUserByUsername(username: string): Observable<IUser | undefined> {
    const foundUser = this.users.find((user) => user.username === username);
    return of(foundUser);
  }


  // Actualizar el perfil del usuario
  updateUserProfile(user: IUser): void {
    const index = this.users.findIndex((u) => u.username === user.username);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
