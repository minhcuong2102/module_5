import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BdsListComponent} from './bds-list/bds-list.component';
import {BdsCreateComponent} from './bds-create/bds-create.component';
import {BdsRoutingModule} from './bds-routing.module';


@NgModule({
  declarations: [
    BdsListComponent,
    BdsCreateComponent
  ],
  exports: [
    BdsListComponent
  ],
  imports: [
    CommonModule,
    BdsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BdsModule {
}
