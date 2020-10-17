import { Component, OnInit, Input } from '@angular/core';
import { articleList } from '../post-section/data'
import { ArticlePrev } from '../post-section/element'
import { _Article } from 'src/app/utils/classe/article';
import { domain } from '../../config'
@Component({
  selector: 'app-post-list-section',
  templateUrl: './post-list-section.component.html',
  styleUrls: ['./post-list-section.component.scss']
})
export class PostListSectionComponent implements OnInit {
  @Input() data: Array<_Article>
  constructor() { }
  endpointApi = `http://${domain}:5000`
  ngOnInit(): void {
  }

}
