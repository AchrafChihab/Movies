import { ActivatedRoute } from '@angular/router';
import { TvShowService } from './../../services/tv-show.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-session-episode',
  templateUrl: './session-episode.component.html',
  styleUrls: ['./session-episode.component.css']
})
export class SessionEpisodeComponent {
  @Input() episodes: any[]= []
  constructor(private tvshowservice:TvShowService,private route:ActivatedRoute){}
 
   
}
