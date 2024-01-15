import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { ProcuraComponent } from './procura/procura.component';
import { ListaComponent } from './lista/lista.component';
import { DialogCreateComponent } from './lista/dialog-create/dialog-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        TitleHeaderComponent,
        ProcuraComponent,
        ListaComponent,
        DialogCreateComponent,
        
    ],
    exports:[
        TitleHeaderComponent,
        ProcuraComponent,
        ListaComponent,
        DialogCreateComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgOptimizedImage,
        MatFormFieldModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatNativeDateModule,
    ]
})
export class UtilModule{}