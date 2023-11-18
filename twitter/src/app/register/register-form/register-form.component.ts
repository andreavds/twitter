import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  user: IUser = {
    _id: '',
    username: '',
    email: '',
    password: '',
    fullname: '',
    bio: '',
    profilePicture: '',
    bannerPicture: '',
    followers: [],
    followersInt: 0,
    following: [],
    followingInt: 0,
    goonts: [],
    createdAt: new Date()
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.registerUser(this.user)
      .then((response: any) => {
        console.log('Usuario registrado:', response.data);
        this.router.navigate(['/login-form']);
      })
      .catch((error: any) => {
        console.error('Error al registrar usuario:', error);
      });
  }
}
