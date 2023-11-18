import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Goont } from '../models/goont.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class GoontService {
  private apiUrl = 'https://guntterback-production.up.railway.app';

  constructor(private http: HttpClient, private userService: UserService) {}

  private getAccessToken(): string {
    return localStorage.getItem('accessToken') || '';
  }

  // Método que obtiene TODOS los goonts hechos por el usuario actual
  getUserGoonts(): Observable<any> {
    const token = this.getAccessToken();
    const userId = this.userService.getUserIdFromToken(token);

    if (!userId) {
      console.error('ID de usuario no encontrado en el token.');
      return new Observable<Goont[]>();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<Goont[]>(`${this.apiUrl}/getusergoonts`, {}, { headers });
  }

  // Método que obtiene todos los goonts que sean una respuesta por parte del usuario
  getGoontReplies(): Observable<any> {
    const token = this.getAccessToken();
    const userId = this.userService.getUserIdFromToken(token);

    if (!userId) {
      console.error('ID de usuario no encontrado en el token.');
      return new Observable<any>();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(`${this.apiUrl}/getgoontreplies`, { userId }, { headers });
  }

  // Método que obtiene todos los goonts de las personas que sigue el usuario
  getFeed(): Observable<any> {
    const token = this.getAccessToken();
    const userId = this.userService.getUserIdFromToken(token);

    if (!userId) {
      console.error('ID de usuario no encontrado en el token.');
      return new Observable<any>();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(`${this.apiUrl}/getfeed`, { userId }, { headers });
  }

  // Método que obtiene todos los goonts existentes en la faz de la tierra
  getAllGoonts(): Observable<any> {
    const token = this.getAccessToken();
    const userId = this.userService.getUserIdFromToken(token);

    if (!userId) {
      console.error('ID de usuario no encontrado en el token.');
      return new Observable<any>();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(`${this.apiUrl}/getallgoonts`, { userId }, { headers });
  }

  // Método para crear un goont
  addGoont(content: string): Observable<any> {
    const token = this.getAccessToken();
    const userId = this.userService.getUserIdFromToken(token);

    if (!userId) {
      console.error('ID de usuario no encontrado en el token.');
      return new Observable<any>();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const body = {
      userId: userId,
      content: content,
    };

    return this.http.post<any>(`${this.apiUrl}/addgoont`, body, { headers });
  }
}
