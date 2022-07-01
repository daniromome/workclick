import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  }

  ngOnInit(): void {
  }

}
