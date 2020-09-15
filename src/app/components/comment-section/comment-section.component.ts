import { Component, OnInit, Input } from '@angular/core';
import { WSArticle } from 'src/app/utils/web-service/article';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input() articleId: String
  wsArticle = new WSArticle(this.apollo)
  comments = []
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.wsArticle.getComments(this.articleId, { page: 0, pageSize: 3 }).valueChanges.subscribe(result => {
      this.comments = result.data && result.data['getComments']
    })
  }

}
