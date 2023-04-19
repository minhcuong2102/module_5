import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ss5Component } from './ss5/ss5.component';
import { NameCardComponent } from './ss5/name-card/name-card.component';
import { ProgressBarComponent } from './ss5/progress-bar/progress-bar.component';
import { RatingBarComponent } from './ss5/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './ss5/countdown-timer/countdown-timer.component';
import { Ss6Component } from './ss6/ss6.component';
import { TodoComponent } from './ss6/todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './ss6/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    Ss5Component,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    Ss6Component,
    TodoComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
