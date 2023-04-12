import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { TvActorsComponent } from './components/tv-actors/tv-actors.component';
import { TvSimilarComponent } from './components/tv-similar/tv-similar.component';
import { ShowTvComponent } from './pages/show-tv/show-tv.component';
import { ImagesComponent } from './components/images/images.component';
import { ActorsComponent } from './components/actors/actors.component';
import { SimilarComponent } from './components/similar/similar.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { TvComponent } from './pages/tv/tv.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { SessionComponent } from './components/session/session.component';
import { SessionEpisodeComponent } from './components/session-episode/session-episode.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"tv",component:TvComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"showmovie/:id",component:ShowMovieComponent,
   children: [
    {
      path:'similar',
      component:SimilarComponent
    },
    {
      path:'author',
      component:ActorsComponent
    },
    {
      path:'image',component:ImagesComponent
    },
    {
      path:'trailer',component:TrailerComponent
    },
   ]},
   {path:"tvshow/:id",component:ShowTvComponent,
   children: [
    {path:'session',component:SessionComponent,
    children: [
        {
        path:'session/:sessionNumber/episodes',
        component:SessionEpisodeComponent
        }
      ]        
    },
    {
      path:'similar',
      component:TvSimilarComponent
    },
    {
      path:'author',
      component:TvActorsComponent
    },
    {
      path:'info',component:TvDetailsComponent
    } 
   ]},
  //  {path :"episodes" ,component:EpisodesComponent},
  {path:"**",redirectTo:"/"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
