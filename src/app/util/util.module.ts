import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        TitleHeaderComponent
    ],
    exports:[
        TitleHeaderComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgOptimizedImage
    ]
})
export class UtilModule{}