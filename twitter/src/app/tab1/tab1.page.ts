import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoontService } from '../services/goont.service';
import { Goont } from '../models/goont.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  goonts: Goont[] = [];
  goontsSubscription: Subscription = new Subscription();

  constructor(private goontService: GoontService) {}

  ngOnInit() {
    this.loadAllGoonts();
  }

  loadAllGoonts() {
    this.goontsSubscription = this.goontService.getAllGoonts().subscribe(
      (data: any) => {
        if (Array.isArray(data.allGoonts)) {
          this.goonts = data.allGoonts.sort((a: Goont, b: Goont) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else {
          console.error('El arreglo de goonts no está presente en la respuesta:', data);
        }
      },
      (error) => {
        console.error('Error al obtener los Goonts:', error);
      }
    );
  }

  ngOnDestroy() {
    this.goontsSubscription.unsubscribe();
  }
}
