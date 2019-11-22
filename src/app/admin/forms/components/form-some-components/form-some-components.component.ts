import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-some-components',
  templateUrl: './form-some-components.component.html',
  styleUrls: ['./form-some-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSomeComponentsComponent { }
