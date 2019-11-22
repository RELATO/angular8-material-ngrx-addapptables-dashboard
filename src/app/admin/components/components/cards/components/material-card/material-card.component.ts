import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
  host: {
    class: 'row'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialCardComponent { }
