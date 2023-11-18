import { Component } from '@angular/core';
import { GoontService } from '../services/goont.service';
import { Goont } from '../models/goont.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  goonts: Goont[] = [];
  filteredGoonts: Goont[] = [];
  searchText: string = '';
  selectedFilter: string = '';

  constructor(
    private goontService: GoontService,
    private alertController: AlertController
  ) {
    this.loadAllGoonts();
  }

  loadAllGoonts() {
    this.goontService.getAllGoonts().subscribe(
      (data: any) => {
        if (Array.isArray(data.allGoonts)) {
          this.goonts = data.allGoonts;
          this.filteredGoonts = this.goonts; 
        } else {
          console.error('El arreglo de goonts no está presente en la respuesta:', data);
        }
      },
      (error) => {
        console.error('Error al obtener los Goonts:', error);
      }
    );
  }

  applyFilter() {
    this.filteredGoonts = [...this.goonts];

    if (this.selectedFilter === 'oldToNew') {
      this.filteredGoonts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else if (this.selectedFilter === 'newToOld') {
      this.filteredGoonts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (this.selectedFilter === 'mostLiked') {
      this.filteredGoonts.sort((a, b) => b.likes.length - a.likes.length);
    } else if (this.selectedFilter === 'lessLiked') {
      this.filteredGoonts.sort((a, b) => a.likes.length - b.likes.length);
    }

    this.applySearchFilter();
  }

  applySearchFilter() {
    if (this.searchText.trim() !== '') {
      this.filteredGoonts = this.filteredGoonts.filter(goont =>
        goont.content.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
