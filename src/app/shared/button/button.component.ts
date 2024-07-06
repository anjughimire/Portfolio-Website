import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="{{btnClassName}}">
        <ng-content></ng-content>
    </button>
  `
})

export class ButtonComponent {
    @Input() btnClassName!: String ;
}
