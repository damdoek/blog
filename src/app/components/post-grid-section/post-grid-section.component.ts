import { Component, OnInit, Input } from '@angular/core';
import { _Article } from 'src/app/utils/classe/article';
import { domain } from '../../config'
@Component({
  selector: 'app-post-grid-section',
  templateUrl: './post-grid-section.component.html',
  styleUrls: ['./post-grid-section.component.scss']
})
export class PostGridSectionComponent implements OnInit {
  @Input() data: Array<_Article>
  constructor() { }
  endpointApi = `http://${domain}:5000`
  ngOnInit(): void {
  }

}
