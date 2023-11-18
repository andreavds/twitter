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
    this.goontsSubscription = this.goontService.getAllGoonts().subscribe((data: Goont[]) => {
      this.goonts = data;
    });
  }

  addGoont(content: string) {
    const newGoont: Goont = {
      _id: { $oid: '' },
      content: content,
      author: 'Yo',
      likes: [],
      image: null,
      isComment: false,
      createdAt: new Date().toISOString(), 
      __v: 0 
    };
  
    this.goontService;
    this.loadAllGoonts();
  }
  
  ngOnDestroy() {
    this.goontsSubscription.unsubscribe();
  }
}
