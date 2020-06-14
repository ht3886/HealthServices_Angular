import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  slides = [
    {img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Planche.jpg"},
    {img: "https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg"},
    {img: "https://live.staticflickr.com/8067/29609195382_ebd40cdb3a_b.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "arrows": false,
    "swipeToSlide": true,
    "swipe": true,
    "pauseOnHover":false
};
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  slickInit(e) {}
  
  breakpoint(e) {}
  
  afterChange(e) {}
  
  beforeChange(e) {}
}
