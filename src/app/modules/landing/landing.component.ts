import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public images: string[] = [
    "./assets/poster.jpg",
    "./assets/rh.webp"
  ].map(image => `url(${image}) no-repeat center center fixed`)

  constructor() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  }

  ngOnInit(): void {
  }

}
