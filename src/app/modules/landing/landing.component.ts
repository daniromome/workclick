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
    "./assets/ANUNCIO.png",
  ].map(enterprice=>`url(${enterprice}) no-repeat center center fixed`)
  constructor() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  }

  ngOnInit(): void {
  }

}
