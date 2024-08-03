import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=["Spider man","Hulk","Shue hulk", "Thork"]
  public deletedHero?:string;
  
  removeLastHeroe():void{
    this.deletedHero = this.heroNames.pop();
  }
}
