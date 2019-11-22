import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-form',
  templateUrl: './vertical-form.component.html',
  styleUrls: ['./vertical-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalFormComponent {

  @Input()
  required = false;

}
