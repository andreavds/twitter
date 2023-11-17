import { Component } from '@angular/core';
import { GoontService } from '../services/goont.service';
import { Goont } from '../models/goont.model'; // Importa el modelo Goont

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  newGoontContent: string = '';

  constructor(private goontService: GoontService) {}

  addGoont() {
    if (this.newGoontContent.trim() !== '') {
      const newGoont: Goont = {
        _id: { $oid: '' }, // Asigna el ID según corresponda
        content: this.newGoontContent,
        author: 'UsuarioActual', // O el campo de autor correspondiente
        likes: [],
        image: null,
        isComment: false,
        createdAt: new Date().toISOString(),
        __v: 0
      };

      this.goontService.addGoont(newGoont); // Agrega el nuevo goont usando el servicio

      this.newGoontContent = ''; // Limpia el contenido después de agregar el goont
    }
  }
}
