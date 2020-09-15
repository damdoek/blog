import { Component, OnInit, Input } from '@angular/core';
import { RelArticle } from './element'
import { WSArticle } from 'src/app/utils/web-service/article';
import { Apollo } from 'apollo-angular';
import { _Article } from 'src/app/utils/classe/article';
// import { relArticle } from './data'
@Component({
  selector: 'app-related-section',
  templateUrl: './related-section.component.html',
  styleUrls: ['./related-section.component.scss']
})
export class RelatedSectionComponent implements OnInit {

  constructor(private apollo: Apollo) { }
  @Input() relatedArt: _Article
  wsArticle: WSArticle = new WSArticle(this.apollo)
  related: [_Article]
  ngOnInit(): void {
    this.wsArticle.getArticleList(this.relatedArt.category + " " + JSON.stringify(this.relatedArt.tags), { pageSize: 4, page: 0 }).valueChanges.subscribe(result => {
      this.related = result.data && result.data['getArticles']
    })
  }

}
