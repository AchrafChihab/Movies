import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  upComingMovies:any [] = [];
  popularMovies:any [] = [];
  itemMrunTime:any [] =[];
  showMore:boolean=false;
  constructor(private moviesService:MoviesService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getAllUpComing();
    this.getAllPopular();
  }
  
  getAllUpComing(){
    this.moviesService.getUpComing().subscribe(({results}:any)=>{
      this.upComingMovies = results;
      // console.log(results);
    })
  }
  getAllPopular(page:number = 1){
    this.moviesService.getPopular(page).subscribe(({results}:any)=>{
      this.popularMovies = results.splice(0,18);
    })
  }

}
