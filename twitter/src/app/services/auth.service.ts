import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface LoginResponse {
  token: string;
}
const userData = {
  username: '',
  email: '',
  password: '',
  fullname: '',
  bio: '',
  profilePicture: ''
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://guntterback-production.up.railway.app';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Promise<any> {
    const registerData = {
      email: userData.email,
      password: userData.password,
      username: userData.username,
      fullname: userData.fullname,
      profilePicture: userData.profilePicture,
      bio: userData.bio
    };

    return this.http.post(`${this.apiUrl}/signup`, registerData).toPromise();
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
  
  // Almacenar el token
  private getAccessToken(): string {
    return localStorage.getItem('accessToken') || '';
  }
}
