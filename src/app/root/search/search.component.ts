import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isGrid: boolean = true
  sub
  search
  constructor(
  ) { }

  ngOnInit(): void {

  }

  switchView(arg) {
    this.isGrid = arg
  }
}
