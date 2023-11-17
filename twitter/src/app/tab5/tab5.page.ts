import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page {
  userProfile: User = {
    _id: '1',
    username: 'Naruto',
    email: 'naruto@hotmail.com',
    fullname: 'Tu minita kawaii uwu',
    bio: 'Sasuke te extraño mi amor :(',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xTCkh0Cj1S2LtFeuw97diq1vKEQ1sKKpBIpfdVxS&s',
    wallpaperPicture: 'https://e0.pxfuel.com/wallpapers/281/315/desktop-wallpaper-naruto-x-sasuke-sasuke-ninja-yaoi-naruto-kiss-thumbnail.jpg',    
    followers: ['100', '343'],
    following: ['50', '4']
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    const currentUserUsername = 'yo'; 

    this.userService.getUserByUsername(currentUserUsername).subscribe((user) => {
      if (user) {
        this.userProfile = user;
      }
    });
  }
}
