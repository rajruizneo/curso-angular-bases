import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters:Character[] = [
    { name:'Krilin', power:500 },
    { name:'Goku', power:10000 },
    { name:'Vegueta', power:9000 }
];


public onNewCharacter(car:Character):void {
  //console.log(car);
  this.characters.push(car);
}

public onDeleteCharacter(i:number):void{
  console.log({i});
  this.characters.splice(i,1);
}



}
