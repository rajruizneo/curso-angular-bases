import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  public name:string='ironman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  public changeHero(value:string):void{
    this.name = value;
  }
  public changeAge(value:number):void{
    this.age=value;
  }
  public reset():void{
    this.age=45;
    this.name='ironman';
  }

}
