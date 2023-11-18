import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  users: IUser[] = [];
  searchText: string = '';
  filteredUsers: IUser[] = [];
  searchUsername: string = '';

  constructor(private userService: UserService) {
  }

  
  searchUsersByUsername() {
    if (this.searchUsername && this.searchUsername.trim() !== '') {
      this.userService.searchUsersByUsername(this.searchUsername).subscribe(
        (data: any) => {
          console.log('Resultados de la búsqueda:', data);
          if (data && Array.isArray(data.users)) {
            this.filteredUsers = data.users;
          } else {
            console.error('Erorr:', data);
          }
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.warn('Bueno nose pq no sirve XD');
      this.filteredUsers = []; 
    }
  }
  
  onSearch() {
    this.searchUsersByUsername();
  }
}
