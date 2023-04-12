import { TvShowService } from './../../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit{
  constructor(private route:ActivatedRoute,private tvshowservice:TvShowService){}
  tv: any[] = [];
  PoularTvShow:any[]= []
  toRatedTvShow:any[]=[]
  latestTvShow:any[]= []
  totalpage: number = 1;
  currentPage: number = 1; 
  querytv: string = "";
  ngOnInit(): void {
    // this.getAllLatest();
    this.getTopRatedTvShow();
  }
  searchTv(page:number = 1){
    if(this.querytv){
      this.tvshowservice.searchTvShow(this.querytv, page).subscribe(({results, total_results}: any) => {
        this.toRatedTvShow = results   
        this.totalpage = total_results; 
      })
      return
    }
    this.getTopRatedTvShow();
  }
  // getPopularTvShow(page:number = 1){
  //   // this.tvshowservice.getPopular(page).subscribe(({results}:any)=>{
  //   //   this.PoularTvShow = results;
  //   // })
  //   this.tvshowservice.getPopular(page).subscribe((data:any)=>{
  //     console.log(data);     
  //     this.PoularTvShow = data.results.splice(0,18);
  //     this.totalpage = data.total_results;
  //   })
  // }
  getTopRatedTvShow(page:number = 1){
    this.tvshowservice.getTopRated(page).subscribe(({results}:any)=>{
      this.toRatedTvShow = results;
    })
      this.tvshowservice.getTopRated(page).subscribe((data:any)=>{
      // console.log(data);     
      this.toRatedTvShow = data.results.splice(0,18);
      this.totalpage = data.total_results;
    })
  }
  getAllLatest(){
    this.tvshowservice.getLatest().subscribe(({results}:any)=>{
      this.latestTvShow = results;
      console.log(results);
      
    })
  }
  paginate(event:any){
    if(this.querytv==''){
      this.getTopRatedTvShow(event.page + 1)
    }else{
      this.searchTv(event.page + 1)
    }
  }

}
