import { MoviesService } from 'src/app/services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

@Input() item: any = {}
 itemMrunTime: any;
 constructor(private moviesService:MoviesService,private route :ActivatedRoute){}
   ngOnInit(): void {
      this.getOneMovies(this.item?.id);
  }

getOneMovies(id:number |undefined){
  this.moviesService.getMovie(id).subscribe((response:any) => this.itemMrunTime = response.runtime)
}
}
