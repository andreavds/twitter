import { Component } from '@angular/core';
import { GoontService } from '../services/goont.service';
import { Goont } from '../models/goont.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  goonts: Goont[] = [];

  constructor(private goontService: GoontService) {
    this.loadGoonts();
  }

  loadGoonts() {
    this.goonts = this.goontService.getGoonts();
  }

  addGoont(content: string) {
    const newGoont: Goont = {
      id: this.goonts.length + 1,
      content: content,
      author: 'UsuarioActual',
      timestamp: new Date(),
    };

    this.goontService.addGoont(newGoont);
    this.loadGoonts();
  }
}
