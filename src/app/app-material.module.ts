import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const matModules = [
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class AppMaterialModule { }
