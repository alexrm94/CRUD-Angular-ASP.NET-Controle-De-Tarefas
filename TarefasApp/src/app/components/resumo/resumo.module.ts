import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumoRoutingModule } from './resumo-routing.module';
import { ResumoComponent } from './resumo.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ResumoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ResumoRoutingModule,
  ]
})
export class ResumoModule { }
