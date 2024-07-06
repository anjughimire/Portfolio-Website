import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="{{lineBarClassName}}">
        <ng-content></ng-content>
    </div>
  `
})

export class LineBarComponent {
    @Input() lineBarClassName!: String ;
}
