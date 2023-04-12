import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: any[] = [];
  totalpage: number = 1;
  currentPage: number = 1; 

  constructor(private route:ActivatedRoute,private moviesService:MoviesService){}
  ngOnInit(): void {
    this.getAllPopular();
  }
  query: string = "";

  searchMovie( page: number = 1){
    if(this.query){
      this.moviesService.serchMovies(this.query, page).subscribe(({results, total_results}: any) => {
        this.movie = results   
        this.totalpage = total_results; 
      })
      return
    }
    this.getAllPopular();
  }

  
  getAllPopular(page:number = 1){
    this.moviesService.getPopular(page).subscribe((data:any)=>{
      console.log(data);     
      this.movie = data.results.splice(0,18);;
      this.totalpage = data.total_results;
    })
  }
  paginate(event:any){
    if(this.query==''){
      this.getAllPopular(event.page + 1)
    }else{
      this.searchMovie(event.page + 1)
    }
  }
}
