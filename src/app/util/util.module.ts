import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { RouterModule } from '@angular/router';
import { ProcuraComponent } from './procura/procura.component';

@NgModule({
    declarations:[
        TitleHeaderComponent,
        ProcuraComponent,
    ],
    exports:[
        TitleHeaderComponent,
        ProcuraComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgOptimizedImage
    ]
})
export class UtilModule{}