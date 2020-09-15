import { Component, OnInit, Input } from '@angular/core';
import { Article, _Article } from '../../utils/classe/article';
import { WSArticle } from '../../utils/web-service/article';
import { Apollo } from 'apollo-angular'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-best-post-section',
  templateUrl: './best-post-section.component.html',
  styleUrls: ['./best-post-section.component.scss']
})
export class BestPostSectionComponent implements OnInit {
  // article: ArticleBest
  article: Article
  // relatedArticle: Array<RelArticle> = relArticle

  constructor(private apollo: Apollo) { }

  private wsArticle: WSArticle = new WSArticle(this.apollo)

  @Input() mode: String
  @Input() articleId: String
  comments = []
  commentsCount: Number
  ngOnInit(): void {
    this.fetchArticle(this.articleId || "5f4257fae3c4bf44ec3653e3").valueChanges.subscribe(result => {
      this.article = result.data && result.data['getArticleById']
    })

    this.wsArticle.getCommentsCount(this.articleId || "5f4257fae3c4bf44ec3653e3").valueChanges.subscribe(result => {
      this.commentsCount = result.data && result.data['getCommentsCount']
    })
  }




  fetchArticle(id) {
    try {
      let data
      if (this.mode == "about")
        data = this.wsArticle.getArticleAbout()
      else
        data = this.wsArticle.getArticle(id)
      return data
    }
    catch{
      return null
    }
  }
}

