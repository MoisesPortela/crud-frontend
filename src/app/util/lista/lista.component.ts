import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DrinkService } from 'src/app/service/drink-service/drink-service.component';
import { DialogCreateComponent } from './dialog-create/dialog-create.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{
  listaDrinks:any[]=[];
  private setListaDrinks:{nome:string,tipo:string,qtd:number,tamanho:string,preco:string}[]=[];
  ultimaPagina:boolean=false;
  errorIsTrue:boolean=false;
  bebida!:{nome:string,tipo:string,qtd:number,tamanho:string,preco:string}
  closeDialog:any;
  size=0;
  page=0;
  totalPages=0;

  constructor(
    private drinkService:DrinkService,
    public dialog:MatDialog){}

  ngOnInit(){
    this.loadAllDrinks(this.page);

  }
  updateDrink(id:number,drink:any){
   this.drinkService.updateDrink(drink.id,drink).pipe(take(1)).subscribe(()=>{
   }) 
  }
  criarBebida(drinks:any){
    this.drinkService.createDrink(drinks).pipe(take(1)).subscribe(()=>{
    })
  }
  deleteDrink(drink:any){
    this.drinkService.deleteDrinkById(drink.id).pipe(take(1)).subscribe(()=>{
      this.loadAllDrinks(this.page);
    })
  }
  loadAllDrinks(page:number){
    this.drinkService.listAllDrinks(page).pipe(take(1)).subscribe((list)=>{
      this.totalPages=list.totalPages-1;
      list=list.content
      for(let drink of list){
        drink.tipo=drink.tipo.toLowerCase();
        drink.preco= parseFloat(drink.preco).toFixed(2);
      }
      this.setListaDrinks=list;
      this.listaDrinks=this.setListaDrinks;
    })
  }
  searchName($event:any) {
    const drinkNameFilter = this.listaDrinks.filter((resp: any) => {
      return !resp.nome.indexOf($event.toLowerCase());
    });
    this.listaDrinks = drinkNameFilter;
    if($event.length<this.size){
      this.loadAllDrinks(0);
    }else{
      this.size=0
    }
     this.size=$event.length
  }
  nextPage(){
    if(this.page<this.totalPages){
    this.page=this.page+1;
    }else{
      alert("Ultima página alcançada")
    }
    this.loadAllDrinks(this.page);
  }
  previousPage(){
    if(this.page>0){
    this.page=this.page-1;
    }else(
      alert("Primeira página alcançada!!")
    )
    this.loadAllDrinks(this.page);

  }

  adicionarDrink(): void {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
    });

    dialogRef.afterClosed().subscribe(data => {
      data=data.value
      data.nome.toLowerCase()
      this.bebida=data
      this.criarBebida(this.bebida);
      this.listaDrinks.push(this.bebida)
      this.bebida={nome:"",tipo:"",qtd:0,tamanho:"",preco:""};
    });
  }
  atualizarDrink(drink:any): void {
    let id = this.listaDrinks.indexOf(drink)
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {nome:drink.nome,tipo:drink.tipo,qtd:drink.qtd,tamanho:drink.tamanho,preco:drink.tamanho}
    });

    dialogRef.afterClosed().subscribe(data => {
      data=data.value
      data.nome.toLowerCase()
      console.log(drink.id);
      this.updateDrink(drink.id,data);
      for(let bebida of this.listaDrinks){
        if(bebida.id==drink.id){
          drink.nome=data.nome;
          drink.tipo=data.tipo;
          drink.qtd=data.qtd;
          drink.tamanho=data.tamanho;
          drink.preco=data.preco;
        }
      }
    });
  }
}
