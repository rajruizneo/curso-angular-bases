import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public car:Character={name:'', power:0};

  emitCharacter():void{
    //console.log(this.car);

    this.onNewCharacter.emit({name:this.car.name, power:this.car.power});

    this.car.name='';
    this.car.power=0;
  }

}
