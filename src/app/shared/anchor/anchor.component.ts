import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a class="{{anchorClassName}}">
        <ng-content></ng-content>
    </a>
  `
})
export class AnchorTagComponent {
  @Input() anchorClassName!: string;
}
