import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { RouterModule } from '@angular/router';
import { ProcuraComponent } from './procura/procura.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
    declarations:[
        TitleHeaderComponent,
        ProcuraComponent,
        ListaComponent,
    ],
    exports:[
        TitleHeaderComponent,
        ProcuraComponent,
        ListaComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgOptimizedImage
    ]
})
export class UtilModule{}