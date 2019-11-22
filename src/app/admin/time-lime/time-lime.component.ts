import { Component } from '@angular/core';

@Component({
  selector: 'app-time-lime',
  templateUrl: './time-lime.component.html',
  styleUrls: ['./time-lime.component.scss']
})
export class TimeLimeComponent {

  alternate = true;
  toggle = true;
  color = false;
  size = 30;
  expandEnabled = true;

  entries = [
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'header',
      content: 'content'
    }
  ];

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }
}
