import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Topic } from './element'
import { topics } from './data'
import { TimeInterval } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { _Carousel, Carousel } from 'src/app/utils/classe/ui';
import { WSUi } from 'src/app/utils/web-service/ui';
import { Apollo } from 'apollo-angular';
@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements OnInit {

  carousel: Carousel
  // currentTopic: number = 0
  crsInt

  constructor(private router: Router, private apollo: Apollo) { }


  ngOnInit(): void {
    this.carousel = new Carousel(this.apollo)
    console.log(this.carousel)
  }

  move(direction) {
    this.carousel.move(direction, this.crsInt)
  }

  navigateTo(url) {
    this.router.navigateByUrl(url)
  }
}
