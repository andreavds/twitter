import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

interface User {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://guntterback-production.up.railway.app';
  private users: IUser[] = [];

  constructor(private http: HttpClient) {}

  private getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getUserIdFromToken(): Observable<string | undefined> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post<User>(`${this.apiUrl}/getuserdata`, {}, { headers }).pipe(
        map((userDetails: User) => userDetails.id),
        catchError((error) => {
          console.error('Error al obtener detalles del usuario:', error);
          return of(undefined);
        })
      );
    } else {
      console.error('Token de autorización no encontrado en el almacenamiento local.');
      return of(undefined);
    }
  }

  getUserProfile(): Observable<IUser> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<IUser>(`${this.apiUrl}/getuserdata`, {}, { headers }).pipe(
      catchError((error) => {
        console.error('Error al obtener datos del perfil del usuario:', error);
        throw error;
      })
    );
  }

  searchUsersByUsername(username: string): Observable<IUser[]> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  
    return this.http.post<IUser[]>(`${this.apiUrl}/findUsers`, { username }, { headers }).pipe(
      catchError((error) => {
        console.error('Error al buscar usuarios:', error);
        return of([] as IUser[]);
      })
    );
  }

  getUserById(userId: string): Observable<IUser> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IUser>(`${this.apiUrl}/users/${userId}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }


  updateUserProfile(user: IUser): void {
    const index = this.users.findIndex((u) => u.username === user.username);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
