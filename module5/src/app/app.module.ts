import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ss5Component} from './ss5/ss5.component';
import {NameCardComponent} from './ss5/name-card/name-card.component';
import {ProgressBarComponent} from './ss5/progress-bar/progress-bar.component';
import {RatingBarComponent} from './ss5/rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './ss5/countdown-timer/countdown-timer.component';
import {Ss6Component} from './ss6/ss6.component';
import {TodoComponent} from './ss6/todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './ss6/register/register.component';
import {Ss7Component} from './ss7/ss7.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {AppRoutingModule} from './app-routing.module';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ImageGalleryComponent} from './component/image-gallery/image-gallery.component';
import {ImageCardComponent} from './component/image-gallery/image-card/image-card.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './component/image-gallery/token';
import { CategoryListComponent } from './component/category/category-list/category-list.component';


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
    RegisterComponent,
    Ss7Component,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    ImageGalleryComponent,
    ImageCardComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ImageGalleryModule
  ],
  providers: [{provide: GalleryConfig, useValue: 3}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
