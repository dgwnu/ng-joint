import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const matModules = [
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class AppMaterialModule { }
