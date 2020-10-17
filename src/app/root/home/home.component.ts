import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { WSArticle } from 'src/app/utils/web-service/article';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articlesQuery
  articleId
  private wsArticle: WSArticle = new WSArticle(this.apollo)
  constructor(private apollo: Apollo, private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("茶の湯：数奇者の世界へようこそ");
    this.metaService.updateTag({ name: 'description', content: '日本の伝統文化である茶の湯を、流派の垣根を超えて存分に楽しみたい…そんな数寄者の茶道にまつわる日常と研究考察など' })
  }

  ngOnInit(): void {
    this.articlesQuery = this.wsArticle.getArticleList(null, { page: 0, pageSize: 1, sortKey: 'views' })
    this.articlesQuery.valueChanges.subscribe(result => {
      var data = (result.data && result.data['getArticles'])
      this.articleId = data.article[0]._id

    })
  }

}
