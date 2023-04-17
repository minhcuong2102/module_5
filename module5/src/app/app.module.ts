import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ss5Component } from './ss5/ss5.component';
import { NameCardComponent } from './ss5/name-card/name-card.component';
import { ProgressBarComponent } from './ss5/progress-bar/progress-bar.component';
import { RatingBarComponent } from './ss5/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './ss5/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    Ss5Component,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
