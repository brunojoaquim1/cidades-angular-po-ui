import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from '../interceptors/interceptors.module';
@NgModule({
 declarations: [CidadeListComponent],
 imports: [CommonModule,
           SharedModule,
           CidadeRoutingModule,
           HttpClientModule,
           InterceptorsModule
          ]
 })
 export class cidadeModule { }