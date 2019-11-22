import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCardComponent { }
