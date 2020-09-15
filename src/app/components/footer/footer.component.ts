import { Component, OnInit } from '@angular/core';
import { Footer, _Footer } from 'src/app/utils/classe/ui';
import { WSUi } from 'src/app/utils/web-service/ui';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: Footer

  constructor(private apollo: Apollo) { }

  private wsUI: WSUi = new WSUi(this.apollo)

  ngOnInit(): void {
    this.wsUI.getFooter().valueChanges.subscribe(result => {
      this.footer = new Footer(result.data && result.data['getFooter'])
    })


  }
}