import {Component, input, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() class :string | undefined
@Input() preIcon :string | undefined
@Input() appendedIcon :string | undefined
@Input() value :string | undefined

}
