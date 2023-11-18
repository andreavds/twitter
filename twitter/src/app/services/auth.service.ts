import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://guntterback-production.up.railway.app';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Promise<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData).toPromise();
  }

  
  // Login EXITOSO por favor que siga sirviendo
  async loginUser(credentials: { usernameOrEmail: string, password: string }): Promise<any> {
    try {
      const requestBody = {
        email: credentials.usernameOrEmail,
        username: credentials.usernameOrEmail,
        password: credentials.password
      };
  
      return await this.http.post(`${this.apiUrl}/signin`, requestBody).toPromise();
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        console.error('Error al iniciar sesión:', error.error);
      } else {
        console.error('Error al iniciar sesión:', error);
      }
      throw error;
    }
  }
  

  // Obtener los datos del perfil del usuario
  async getUserProfileData(): Promise<any> {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      throw new Error('Token no encontrado en el almacenamiento local');
    }

    try {
      const response = await firstValueFrom(this.http.post(`${this.apiUrl}/getuserdata`, {}, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      }));
      return response;
    } catch (error) {
      console.error('Error al obtener datos del perfil:', error);
      throw error;
    }
  }

  // Almacenar el token
  private getAccessToken(): string {
    return localStorage.getItem('accessToken') || '';
  }
}
