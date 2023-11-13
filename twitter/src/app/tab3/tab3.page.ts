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
      this.goontService.addGoont({
        id: this.goontService.getNextGoontId(),
        content: this.newGoontContent,
        author: 'UsuarioActual',
        timestamp: new Date(),
      });

      this.newGoontContent = '';
    }
  }
}
