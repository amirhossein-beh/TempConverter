import { Component ,ViewChild, AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "../components/button/button.component";
import {FormsModule} from "@angular/forms";
import {ErrorComponent} from "../components/error/error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, FormsModule, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  value = 10;
  unitFirst:string | undefined
  unitSecond:string | undefined
  result:number | null = null
  TitelError:string | undefined

  @ViewChild('selectElement1') selectElement1: any;
  @ViewChild('selectElement2') selectElement2: any;


  ngAfterViewInit() {}

  calculate(){
    const selectValue1 = this.selectElement1.nativeElement.value;
    const selectValue2 = this.selectElement2.nativeElement.value;


    if (selectValue1.split(' ')[0] == 'Celsius'){
      if (selectValue2.split(' ')[0] == 'Fahrenheit'){
        this.result = (9 / 5) * this.value + 32;
      }
      else if (selectValue2.split(' ')[0] == 'Kelvin'){
        this.result = this.value + 273.15;
      }
      else if (selectValue2.split(' ')[0] == 'Rankine'){
        this.result = (9 / 5) * this.value + 491.67;
      }
      else {
        this.TitelError = `Why do you want to convert ${selectValue1.split(' ')[0]} to ${selectValue2.split(' ')[0]}😑???? `
      }
    }

    if (selectValue1.split(' ')[0] == 'Fahrenheit'){
      if (selectValue2.split(' ')[0] == 'Celsius') {
        this.result = (5 / 9) * (this.value - 32);
      }
      else if (selectValue2.split(' ')[0] == 'Kelvin'){
        this.result = (5 / 9) * (this.value - 32) + 273.15;
      }
      else if (selectValue2.split(' ')[0] == 'Rankine'){
        this.result = this.value + 459.67;
      }
      else {
        this.TitelError = `Why do you want to convert ${selectValue1.split(' ')[0]} to ${selectValue2.split(' ')[0]}😑???? `
      }
    }

    if (selectValue1.split(' ')[0] == 'Kelvin' ){
      if (selectValue2.split(' ')[0] == 'Fahrenheit') {
        this.result = (9 / 5) * (this.value - 273.15) + 32;
      }
      else if (selectValue2.split(' ')[0] == 'Celsius'){
        this.result = this.value - 273.15;
      }
      else if (selectValue2.split(' ')[0] == 'Rankine'){
        this.result = (9 / 5) * this.value;
      }
      else {
        this.TitelError = `Why do you want to convert ${selectValue1.split(' ')[0]} to ${selectValue2.split(' ')[0]}😑???? `
      }
    }

    if (selectValue1.split(' ')[0] == 'Rankine'){
      if (selectValue2.split(' ')[0] == 'Fahrenheit') {
        this.result = this.value - 459.67;
      }
      else if (selectValue2.split(' ')[0] == 'Celsius'){
        this.result = (5 / 9) * (this.value - 491.67);
      }
      else if (selectValue2.split(' ')[0] == 'Kelvin'){
        this.result = (5 / 9) * this.value;
      }
      else {
        this.TitelError = `Why do you want to convert ${selectValue1.split(' ')[0]} to ${selectValue2.split(' ')[0]}😑???? `
      }
    }
  }
}
