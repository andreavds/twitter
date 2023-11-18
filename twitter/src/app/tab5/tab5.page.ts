import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {
  userProfile: any;
  loadingProfileData: boolean = true;
  errorLoadingProfile: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadUserProfileData();
  }

  loadUserProfileData() {
    this.authService.getUserProfileData()
      .then((userData: any) => {
        this.userProfile = userData;
        this.loadingProfileData = false;
      })
      .catch(error => {
        console.error('Error al cargar los datos del perfil del usuario', error);
        this.errorLoadingProfile = true;
        this.loadingProfileData = false;
      });
  }
}
