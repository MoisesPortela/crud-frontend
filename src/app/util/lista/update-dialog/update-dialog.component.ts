import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
  public drinkForm!: FormGroup;
  constructor( 
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {nome:string,tipo:string,qtd:number,tamanho:string,preco:string},
    ){}
  ngOnInit(): void {
    this.drinkForm = this.formBuilder.group({
      nome:[this.data.nome, Validators.required],
      tipo:[this.data.tipo, Validators.required],
      qtd:[this.data.qtd,Validators.required],
      tamanho:[this.data.tamanho,Validators.required],
      preco:[this.data.preco,Validators.required]

    })
  }
  checkInicial(){
    console.log()
  }
  criarBebida(){
    
  }
  fechar(): void {
    this.dialogRef.close();
  }


}