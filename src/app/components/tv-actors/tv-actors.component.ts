import { TvShowService } from './../../services/tv-show.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-actors',
  templateUrl: './tv-actors.component.html',
  styleUrls: ['./tv-actors.component.css']
})
export class TvActorsComponent implements OnInit{
  constructor(private tvshowservice:TvShowService,private route:ActivatedRoute){}
  moviesActors:any = [];
  showMore:boolean = false;
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {this.getAllActors(params.id)})
  }
  getAllActors(id:number){
    this.tvshowservice.getActorsTv(id).subscribe(({cast}:any)=>{ //destractring
      this.moviesActors = cast
    })
  }
}
