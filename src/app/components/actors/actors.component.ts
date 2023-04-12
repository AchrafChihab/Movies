import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  moviesActors: any = [];
  showMore: boolean = false;

  constructor(private moviesService:MoviesService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {this.getAllActors(params.id)})
  }

  getAllActors(id:number){
    this.moviesService.getActors(id).subscribe(({cast}:any)=>{ //destractring
      this.moviesActors = cast
    })
  }
}
