import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [{name:'Trunks', power:10}];

  @Output()
  public onDeleteCharacter:EventEmitter<number>=new EventEmitter();


  deleteCharacter(i:number):void{
    console.log(i);

    this.onDeleteCharacter.emit(i);
  }


}
