import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ICONS} from "../../../theme/icons/icon.map";

@Component({
  selector: 'ion-icon-map',
  templateUrl: './icon-map.component.html',
  styleUrls: ['./icon-map.component.scss'],
})
export class IconMapComponent implements OnChanges {

  @Input() name: string;

  public mappedName: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.name) {
      const keys = Object.keys(ICONS);
      const match = keys.find(key => key === this.name);

      this.mappedName = ICONS[match];
    }
  }

}
