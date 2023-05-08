import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductEditComponent} from '../product-edit/product-edit.component';
import {ProductDeleteComponent} from '../product-delete/product-delete.component';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductCreateComponent} from '../product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductEditComponent,
    ProductDeleteComponent,
    ProductListComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}
