import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import {HttpClientModule} from "@angular/common/http";
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { SimilarComponent } from './components/similar/similar.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ImagesComponent } from './components/images/images.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { YoutubeEmbedComponent } from './components/youtube-embed/youtube-embed.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { CardtvComponent } from './components/cardtv/cardtv.component';
import { ShowTvComponent } from './pages/show-tv/show-tv.component';
import { TvSimilarComponent } from './components/tv-similar/tv-similar.component';
import { TvActorsComponent } from './components/tv-actors/tv-actors.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import {GalleriaModule} from 'primeng/galleria';
import { SessionComponent } from './components/session/session.component';
import { SessionEpisodeComponent } from './components/session-episode/session-episode.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodesComponent } from './pages/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ShowMovieComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    TrailerComponent,
    YoutubeEmbedComponent,
    CardtvComponent,
    ShowTvComponent,
    TvSimilarComponent,
    TvActorsComponent,
    TvDetailsComponent,
    SessionComponent,
    SessionEpisodeComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    GalleriaModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
