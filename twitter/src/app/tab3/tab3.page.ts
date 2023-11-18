// tab3.page.ts

import { Component } from '@angular/core';
import { GoontService } from '../services/goont.service';
import { Goont } from '../models/goont.model';
import { Author } from '../models/author.model'; // Importa la interfaz Author

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  newGoontContent: string = '';
  
  // Crea un autor vacío con la estructura requerida
  emptyAuthor: Author = {
    username: '',
    fullname: '',
    profilePic: ''
  };

  constructor(private goontService: GoontService) {}

  addGoont() {
    if (this.newGoontContent.trim() !== '') {
      const newGoont: Goont = {
        _id: { $oid: '' },
        content: this.newGoontContent,
        author: this.emptyAuthor,
        likes: [],
        image: null,
        isComment: false,
        createdAt: new Date().toISOString(),
        __v: 0,
      };

      this.goontService.addGoont(newGoont).subscribe(
        (response) => {
          console.log('Goont creado con éxito:', response);
          this.newGoontContent = '';
        },
        (error) => {
          console.error('Error al crear el Goont:', error);
        }
      );
    }
  }
}
