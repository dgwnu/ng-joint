import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatTreeModule,
    MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const matModules = [
    MatCardModule,
    MatTreeModule,
    MatIconModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class AppMaterialModule { }
