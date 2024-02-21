import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="decreaseBy(-1)">-1</button>
  <button (click)="resetValue(10)">Reset</button>
  `
})

export class CounterComponent {
  public counter:number=10;

  public increaseBy(value:number):void{
    this.counter+=value;
  }
  public decreaseBy(value:number):void{
    this.counter+=value;
  }
  public resetValue(value:number):void{
    this.counter =value;
  }
}
