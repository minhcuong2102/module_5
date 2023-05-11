import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CategoryListComponent} from './component/category/category-list/category-list.component';


@NgModule({
    declarations: [
        AppComponent,
        CategoryListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
