import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isGrid: boolean = true
  sub
  search
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("茶の湯：記述検索");
    this.metaService.updateTag({ name: 'description', content: '日本の伝統文化である茶の湯を、流派の垣根を超えて存分に楽しみたい…そんな数寄者の茶道にまつわる日常と研究考察など' })
  }

  ngOnInit(): void {

  }

  switchView(arg) {
    this.isGrid = arg
  }
}
