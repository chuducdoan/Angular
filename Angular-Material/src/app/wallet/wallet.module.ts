import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWalletComponent } from './list-wallet/list-wallet.component';
import { RouterModule, Routes } from '@angular/router';
import { MatModuleModule } from '../mat-module/mat-module.module';

const routes: Routes = [
  {
    path: '',
    component: ListWalletComponent
  }
]

@NgModule({
  declarations: [
    ListWalletComponent
  ],
  imports: [
    CommonModule,
    MatModuleModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WalletModule { }
