import { TvShowService } from './../../services/tv-show.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-tv',
  templateUrl: './show-tv.component.html',
  styleUrls: ['./show-tv.component.css']
})
export class ShowTvComponent implements OnInit {
 tvM:any=[];
 constructor(private tvshowservice:TvShowService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params:any) => this.getOneTvShow(params.id));
  }



 getOneTvShow(id:number){
  this.tvshowservice.getTvShow(id).subscribe((response:any) => this.tvM = response)
}
}
