import { MoviesService } from './../../services/movies.service';
import { TvShowService } from './../../services/tv-show.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @ViewChild(Paginator) paginator: Paginator | undefined;
  constructor(private tvshowservice:TvShowService,private moviesService:MoviesService){}
tvGenre:any[]=[]
popularM:any[]=[]
getGenre:string ='';
totalResults:any;
categoryName:any = "popular";
totalpage: number = 1;
currentPage: number = 1;
  ngOnInit(): void {
    this.getAllGenres();
    this.displayMovie()
  }
  getAllGenres(){
    this.moviesService.getGenres().subscribe(({genres}:any)=>{
      this.tvGenre = genres;
    })
  }

  // getPopularTvShow(page:number = 1){
  //   this.moviesService.getPopular(page).subscribe((data:any)=>{
  //     this.popularM = data.results;
  //   })
  // }
  // displayMovie(page:number = 1){
  //   if(this.getGenre){
  //     this.categoryName = this.getGenre.toString();
  //   }
  //   if(this.categoryName === "popular"){
  //     this.moviesService.getPopular(page).subscribe((data:any)=>{
  //       this.popularM = data.results;
  //     })
  //   }
  //   else{
  //     this.moviesService.getMovieByCate(this.categoryName).subscribe((res: any)=>{
  //       this.popularM = res.results
  //       this.totalResults = res.total_results > 10000 ? 10000 : res.total_results
  //       this.paginate?.changePageToFirst(0)
  //     })
  //   }
  // }
  displayMovie(){
    if(this.getGenre){
      this.categoryName = this.getGenre.toString();
    }
    if(this.categoryName === "popular"){
      this.moviesService.getPopular(this.categoryName).subscribe((data:any)=>{
        this.popularM = data.results.splice(0,18);;
        this.totalpage = data.total_pages;
         this.totalResults = data.total_results;
         this.paginator?.changePage(0);
      })
    }
    else{
      this.moviesService.getMovieByCate(this.categoryName).subscribe((res: any)=>{
        this.popularM = res.results.splice(0,18);;
         this.totalResults = res.total_results > 10000 ? 10000 : res.total_results;
         this.paginator?.changePage(0); // Reset paginator to first page
      })
    }
  }

  onPageChange(event:any){
      if(this.categoryName == "popular"){
        this.moviesService.getPopular(event?.page+1 ).subscribe((data:any)=>{
          this.popularM = data.results.splice(0,18);;
          this.totalpage = data.total_pages;
           this.totalResults = data.total_results;
        })
      }
      else{
        this.moviesService.getMovieByCate(this.categoryName,(event.page+1)).subscribe((res: any)=>{
          this.popularM = res.results.splice(0,18);
           this.totalResults = res.total_results > 10000 ? 10000 : res.total_results;
        })
      }
    
}
}
