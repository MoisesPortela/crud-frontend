import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-procura',
  templateUrl: './procura.component.html',
  styleUrls: ['./procura.component.scss']
})
export class ProcuraComponent {
  @Output()
  public emmitSearch:EventEmitter<string>=new EventEmitter<string>();
  constructor(
  ) {
  }
  ngOnInit(){
  }
  public search(name:string){
    this.emmitSearch.emit(name)
  }

}
