import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PoModalModule, PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule,
  ]
})
export class SharedModule {};