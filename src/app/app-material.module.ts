import { NgModule } from '@angular/core';
import {
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
} from '@angular/material';

const matModules = [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class AppMaterialModule { }
