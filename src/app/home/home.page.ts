import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public markdownDefault = `<ion-icon name='heart'></ion-icon>`;

  public markdownMapped = `<ion-icon-map name='heart'></ion-icon-map>`;

  constructor() {
  }

}
