import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatModuleModule} from './mat-module/mat-module.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {MatTableModule} from '@angular/material/table';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { PopupSaveComponent } from './popup/popup-save/popup-save.component';
import { PopupDeleteComponent } from './popup/popup-delete/popup-delete.component';
import { PopupErrorComponent } from './popup/popup-error/popup-error.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    PopupSaveComponent,
    PopupDeleteComponent,
    PopupErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModuleModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
