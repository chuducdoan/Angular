import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';

import { MatModuleModule } from '../mat-module/mat-module.module';

@NgModule({
  declarations: [
    ListPostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    MatModuleModule
  ]
})
export class PostModule { }
