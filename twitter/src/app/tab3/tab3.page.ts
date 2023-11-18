import { Component } from '@angular/core';
import { GoontService } from '../services/goont.service';

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
      this.goontService.addGoont(this.newGoontContent).subscribe(
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
