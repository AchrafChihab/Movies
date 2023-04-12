import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = "https://api.themoviedb.org/3/"
  apiKey: string = "790ad5dffd8c2fc52367b3e21e0ff16d"
  option: string = "upcoming"
  option2: string = "popular"

  constructor(private http: HttpClient) { }
  getUpComing(){
    return this.http.get(`${this.baseUrl}movie/${this.option}?api_key=${this.apiKey}`)
  }
  getPopular(page:number){
    return this.http.get(`${this.baseUrl}movie/${this.option2}?page=${page}&api_key=${this.apiKey}`)
  }
  getMovie(id:number | undefined){
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
  }
  getSimilar(id:number | undefined){
    return this.http.get(`${this.baseUrl}movie/${id}/similar?api_key=${this.apiKey}`)
  }
  getActors(id:number | undefined){
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
}
  getImages(id:number | undefined){
    return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`)
  }
  getVedios(id:number | undefined){
    return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`)
  }
  serchMovies(query:string,page:number = 1){
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${query}&page=${page}&include_adult=false`)
  }
  getMovieByCate(categoryId : string, page:number=1){
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&include_adult=false&with_genres=${categoryId}&page=${page}`)
   }
   getGenres(){
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`)
  }
}
