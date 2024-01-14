import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import {PagesRoutingModule} from "./pages.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilModule } from "../util/util.module";
//Pages




@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        PagesRoutingModule,
        UtilModule,
    ]
})
export class PagesModule { }
