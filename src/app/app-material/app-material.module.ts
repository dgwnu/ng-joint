import { NgModule } from '@angular/core';
import {
    MatTabsModule
} from '@angular/material';

const matModules = [
    MatTabsModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class AppMaterialModule { }
