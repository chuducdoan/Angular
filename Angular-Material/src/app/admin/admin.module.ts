import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatModuleModule } from '../mat-module/mat-module.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DialogDeleteComponent } from './popup/dialog-delete/dialog-delete.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { ListSpendingComponent } from './spending-record/list-spending/list-spending.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { ListWalletComponent } from './wallet/list-wallet/list-wallet.component';
import { AddModalAccountComponent } from './account/add-modal-account/add-modal-account.component';
import { AddModalSpendingComponent } from './spending-record/add-modal-spending/add-modal-spending.component';
import { AddModalPostComponent } from './post/add-modal-post/add-modal-post.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'account',
        component: ListAccountComponent
      },
      {
        path: 'spending-record',
        component: ListSpendingComponent
      },
      {
        path: 'post',
        component: ListPostComponent
      },
      {
        path: 'wallet',
        component: ListWalletComponent
      }
    ]
  },

]

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    DialogDeleteComponent,
    ListAccountComponent,
    AddModalAccountComponent,
    ListWalletComponent,
    ListSpendingComponent,
    ListPostComponent,
    AddModalSpendingComponent,
    AddModalPostComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModuleModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
