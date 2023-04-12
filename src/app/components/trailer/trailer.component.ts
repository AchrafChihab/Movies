import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesComponent } from './../../pages/movies/movies.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  Trailermovie: any[] = [];
constructor(private moviesService:MoviesService,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {
      this.getAllTrailers(params.id)
    })
  }
  getAllTrailers(id:number){
    this.moviesService.getVedios(id).subscribe(({results}:any)=>{
      this.Trailermovie = results
    })
  }
}
