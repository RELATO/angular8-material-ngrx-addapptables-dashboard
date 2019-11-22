import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'configuration'
  }
})
export class ConfigurationComponent {

  theme = 'default';
  themes: string[] = ['default', 'gray', 'blue', 'pink'];

  _opened = false;

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) { }

  toggleSidebar() {
    this._opened = !this._opened;
  }

  changeTheme($event: string) {
    this._document.body.className = `theme-${$event}`;
  }
}
