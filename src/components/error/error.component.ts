import {Component, Input } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Item} from "../../app/interfaces/errorItem.interface";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})

export class ErrorComponent {
 @Input() errors:any[] =[]

}
