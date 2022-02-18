import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountComponent } from './list-account/list-account.component';
import { RouterModule, Routes } from '@angular/router';
import { AddModalComponent } from './add-modal/add-modal.component';
import { MatModuleModule } from '../mat-module/mat-module.module';

const routes: Routes = [
  {
    path: '',
    component: ListAccountComponent
  }
]

@NgModule({
  declarations: [
    ListAccountComponent,
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
export class AccountModule { }
