import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {
  userId: string = '';
  userProfile: IUser | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      (user: IUser) => {
        this.userProfile = user;
      },
      (error: any) => {
        console.error('Error al obtener detalles del perfil del usuario:', error);
      }
    );
  }
}
