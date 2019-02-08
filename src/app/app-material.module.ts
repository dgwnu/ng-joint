import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const matModules = [
    MatToolbarModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class AppMaterialModule { }
