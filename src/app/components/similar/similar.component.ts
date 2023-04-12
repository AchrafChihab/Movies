import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {
similarMovies: any = [];
showMore:boolean = false
// @Input() similarM: any = {};


constructor(private moviesService:MoviesService,private route:ActivatedRoute){}
  ngOnInit(): void {
   this.route.parent?.params.subscribe((params:any) => {this.getAllSimilar(params.id)})
  }
  getAllSimilar(id:number){
    this.moviesService.getSimilar(id).subscribe(({results}:any)=>{
      console.log(results)
      this.similarMovies = results;
  })
  }
}
