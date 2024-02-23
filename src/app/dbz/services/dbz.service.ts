import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters:Character[] = [
    { id: uuid(), name:'Krilin', power:500 },
    { id: uuid(), name:'Goku', power:10000 },
    { id: uuid(), name:'Vegueta', power:9000 }
];


public onNewCharacter(car:Character):void {
  //console.log(car);
  const newCar:Character = {
    id:uuid(),
    ...car
  };
  this.characters.push(newCar);
}

public onDeleteCharacter(i:number):void{
  console.log({i});
  this.characters.splice(i,1);
}

public onDeleteCharacterByUuid(id:string):void{
  console.log({id});
  this.characters = this.characters.filter(character => character.id!==id);
}

}
