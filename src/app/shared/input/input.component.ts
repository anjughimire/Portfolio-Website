import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input class="{{inputClassName}}">
        <ng-content></ng-content>
    </input>
  `
})

export class InputComponent {
    @Input() inputClassName!: String ;
}
