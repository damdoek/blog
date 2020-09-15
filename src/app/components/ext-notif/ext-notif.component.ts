import { Component, OnInit } from '@angular/core';
import { Ads } from './element'
import { ads } from './data'
@Component({
  selector: 'app-ext-notif',
  templateUrl: './ext-notif.component.html',
  styleUrls: ['./ext-notif.component.scss']
})
export class ExtNotifComponent implements OnInit {

  constructor() { }
  adverts: Array<Ads> = ads
  ngOnInit(): void {
  }

}
