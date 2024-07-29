import {Component, Input , OnChanges , SimpleChanges } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnChanges{
 @Input() title: string | undefined | null = null
  timer:any;
  close(){
    this.title = null
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] && this.title) {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.close()
    }, 5000);
  }


}
