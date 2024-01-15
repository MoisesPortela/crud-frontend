import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent implements OnInit{
  public drinkForm!: FormGroup;
  constructor( 
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateComponent>
    ){}
  ngOnInit(): void {
    this.drinkForm = this.formBuilder.group({
      nome:['', Validators.required],
      tipo:['', Validators.required],
      qtd:['',Validators.required],
      tamanho:['',Validators.required],
      preco:['',Validators.required]

    })
  }
  checkInicial(){
    console.log()
  }
  fechar(): void {
    this.dialogRef.close();
  }


}
