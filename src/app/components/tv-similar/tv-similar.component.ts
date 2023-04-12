import { TvShowService } from './../../services/tv-show.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-similar',
  templateUrl: './tv-similar.component.html',
  styleUrls: ['./tv-similar.component.css']
})
export class TvSimilarComponent implements OnInit{
  constructor(private tvshowservice:TvShowService,private route:ActivatedRoute){}
  similartvShow:any=[]
  showMore:boolean = false
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {this.getAllSimilar(params.id)})
   }
 
   getAllSimilar(id:number){
     this.tvshowservice.getSimilar(id).subscribe(({results}:any)=>{
       this.similartvShow = results;
   })
   }

}
