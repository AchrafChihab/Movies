import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
   movieImages: any[]=[];
  @Output() valueChange = new EventEmitter<any[]>();
  responsiveOptions: any;
constructor(private moviesService:MoviesService,private route:ActivatedRoute){
  this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {
      this.getAllImgaes(params.id)
    })
  }
  // getAllImgaes(id:number){
  //   this.moviesService.getImages(id).subscribe(({posters}:any)=>{
  //     this.movieImages = posters
  //     console.log(posters);
      
  //   })
  // }
  
  getAllImgaes(id: number) {
    this.moviesService.getImages(id).subscribe(({ posters }: any) => {
      this.movieImages = posters.map((poster: any) => {
        return {
          item: 'https://image.tmdb.org/t/p/w500' + poster.file_path,
          // thumbnail: 'https://image.tmdb.org/t/p/w185' + poster.file_path,

        };
      })
    });

    
  }

  onImageChange(event: any) {
    this.movieImages = event.value;
  }
  
  
}
