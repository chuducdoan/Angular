import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWalletComponent } from './list-wallet/list-wallet.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WalletModule { }
