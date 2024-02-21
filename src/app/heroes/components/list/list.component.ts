import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public heroNames:string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public delHero:string='';

  removeLastHero():void{
    const deleteHero = this.heroNames.pop();
    console.log(deleteHero);
    this.delHero = deleteHero ||'';
  }

}
