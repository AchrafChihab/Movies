import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit{
  itemM:any=[];
  similarMovies:any [] = [];
  @Input() similarM2: any = {};

  constructor(private moviesService:MoviesService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => this.getOneMovies(params.id));
    this.route.params.subscribe((params:any) => {this.getAllSimilar(params.id)})
  }
  
  getOneMovies(id:number){
    this.moviesService.getMovie(id).subscribe((response:any) => this.itemM = response)
  }
  getAllSimilar(id:number){
    this.moviesService.getSimilar(id).subscribe(({results}:any)=>{
      console.log(results)
      this.similarMovies = results;
  })
  }
  getGenres(genres:any) {
    return genres.map((genre: { name: any; }) => genre.name).join(", ");
  }
}
