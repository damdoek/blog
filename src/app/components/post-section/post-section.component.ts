import { Component, OnInit, Input, PLATFORM_ID, Inject } from '@angular/core';
import { SearchStat } from '../../utils/classe/search'
import { _Article } from '../../utils/classe/article'
import { Router, ActivatedRoute } from '@angular/router';
import { WSArticle } from 'src/app/utils/web-service/article';
import { PostViewStateBtn } from 'src/app/utils/classe/ui';
import { Apollo, QueryRef } from 'apollo-angular';
import { platform } from 'os';
@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  @Input() mode: String
  articles: any//Array<_Article>
  count: number
  private wsArticle: WSArticle = new WSArticle(this.apollo)
  search: SearchStat
  postView: PostViewStateBtn = new PostViewStateBtn(true, false)

  constructor(@Inject(PLATFORM_ID) platform: Object, private apollo: Apollo, private route: ActivatedRoute, private router: Router) {
    this.search = new SearchStat(platform)
  }


  private articlesQuery: QueryRef<any>

  ngOnInit(): void {
    // console.log(this.searchParams)
    console.log(this.postView)
    this.route
      .queryParams
      .subscribe(params => {
        console.log(params)
        this.search.setQuery(params['q']);
        var key = (this.search.query && this.search.query !== "") ? 'score' : 'updatedAt'
        this.articlesQuery = this.wsArticle.getArticleList(this.search.query, { page: this.search.page, pageSize: this.search.pageSize, sortKey: key })
        this.articlesQuery.valueChanges.subscribe(result => {
          var data = (result.data && result.data['getArticles'])
          this.articles = data.article || []
          this.count = data.count

        })
      });
  }

  more() {
    this.search.nextPage()
    this.articlesQuery.fetchMore({
      variables: { pagination: { page: this.search.page, pageSize: this.search.pageSize } },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(prev.getArticles)
        if (!fetchMoreResult) { return prev; }
        return [...prev.getArticles.article, ...fetchMoreResult.getArticles.article]
      }
    }).then(result => { this.articles = [...this.articles, ...result.data["getArticles"].article], console.log(result, this.articles); }).catch(err => console.log(err));
  }
  setGridView() {
    this.postView.setGridView()
  }
  setListView() {
    this.postView.setListView()
  }
}
