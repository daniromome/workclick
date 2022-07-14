import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public images: string[] = [
    "./assets/ANUNCIO.png",
    "./assets/SECAPSA.png",
    "./assets/SERH.png",
    "./assets/AVANKITA.png"
  ].map(image => `url(${image}) no-repeat center center fixed`)

  public enterprices: string[] = [
    "./assets/workclick.svg",
    "./assets/workclick-small.png"
  ]
  constructor() {
    SwiperCore.use([Navigation, Pagination]);
  }

  ngOnInit(): void {
  }

}
