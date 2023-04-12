import { ActivatedRoute } from '@angular/router';
import { TvShowService } from './../../services/tv-show.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{
  
constructor(private tvshowservice:TvShowService,private route :ActivatedRoute){}
session:any[]=[];
episodes : any[] = [];
idTv : number = 0;
sidebarVisible: boolean = false;
  ngOnInit(): void {
    // this.route.parent?.params.subscribe((params:any) => {this.getSesseons(params.id)})
    this.route.parent?.params.subscribe((params: any) => { this.idTv = params.id ; this.getSesseons( params.id ) })

  }
getSesseons(idTv: number){
  this.tvshowservice.getTvShow(idTv).subscribe((res:any)=>{
    this.session = res?.seasons
    //  console.log(res?.seasons);
  })
}
 
getEpisodes(idSessions : number ){
  this.tvshowservice.getEpisode(this.idTv,idSessions).subscribe((res: any) => {
    this.episodes= res?.episodes
    // console.log(res)
  })
} 

}
