import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { ProcuraComponent } from './procura/procura.component';
import { ListaComponent } from './lista/lista.component';
import { DialogCreateComponent } from './lista/dialog-create/dialog-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UpdateDialogComponent } from './lista/update-dialog/update-dialog.component';


@NgModule({
    declarations:[
        TitleHeaderComponent,
        ProcuraComponent,
        ListaComponent,
        DialogCreateComponent,
        UpdateDialogComponent
    ],
    exports:[
        TitleHeaderComponent,
        ProcuraComponent,
        ListaComponent,
        DialogCreateComponent,
        UpdateDialogComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgOptimizedImage,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class UtilModule{}