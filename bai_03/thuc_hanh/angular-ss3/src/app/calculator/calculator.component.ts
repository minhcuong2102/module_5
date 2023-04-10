import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  constructor() {
  }

  ngOnInit(): void {
  }

  addition(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber + +secondNumber;
  }

  subtraction(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber - +secondNumber;
  }

  multiplication(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber * +secondNumber;
  }

  division(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber / +secondNumber;
  }
}
