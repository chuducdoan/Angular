import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpendingComponent } from './list-spending/list-spending.component';
import { RouterModule, Routes } from '@angular/router';
import { MatModuleModule } from '../mat-module/mat-module.module';
import { AddModalComponent } from './add-modal/add-modal.component';

const routes: Routes = [
  {
    path: '',
    component: ListSpendingComponent
  }
]

@NgModule({
  declarations: [
    ListSpendingComponent,
    AddModalComponent
  ],
  imports: [
    CommonModule,
    MatModuleModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SpendingRecordModule { }
