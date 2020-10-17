import { Component, OnInit, Input } from '@angular/core';
import { Article, _Article } from '../../utils/classe/article';
import { WSArticle } from '../../utils/web-service/article';
import { Apollo } from 'apollo-angular'
import { ActivatedRoute } from '@angular/router';
import { domain } from '../../config'
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-best-post-section',
  templateUrl: './best-post-section.component.html',
  styleUrls: ['./best-post-section.component.scss']
})
export class BestPostSectionComponent implements OnInit {
  // article: ArticleBest
  article: Article
  // relatedArticle: Array<RelArticle> = relArticle
  constructor(private apollo: Apollo, private titleService: Title, private metaService: Meta) {

  }

  private wsArticle: WSArticle = new WSArticle(this.apollo)

  @Input() mode: String
  @Input() articleId: String
  endpointApi = `http://${domain}:5000`
  comments = []
  commentsCount: Number
  ngOnInit(): void {
    console.log(this.articleId)
    this.fetchArticle(this.articleId).valueChanges.subscribe(result => {
      this.article = result.data && result.data[this.mode == "about" ? 'getAbout' : 'getArticleById']
      if (this.mode == 'full') {
        this.titleService.setTitle(`Ocha: ${this.article.title} `);
        this.metaService.updateTag({ name: 'description', content: `Ocha: ${this.article.prev}` })
      }
    })

    this.wsArticle.getCommentsCount(this.articleId).valueChanges.subscribe(result => {
      this.commentsCount = result.data && result.data['getCommentsCount']
    })
  }




  fetchArticle(id) {
    try {
      let data
      if (this.mode == "about")
        data = this.wsArticle.getAbout()
      else
        data = this.wsArticle.getArticle(id)
      return data
    }
    catch{
      return null
    }
  }
}

