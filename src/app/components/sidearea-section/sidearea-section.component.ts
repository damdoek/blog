import { Component, OnInit } from '@angular/core';
import { WSUi } from '../../utils/web-service/ui';
import { SidePanelArea } from 'src/app/utils/classe/sideplanel';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sidearea-section',
  templateUrl: './sidearea-section.component.html',
  styleUrls: ['./sidearea-section.component.scss']
})
export class SideareaSectionComponent implements OnInit {
  sidePanelArea: SidePanelArea

  constructor(private apollo: Apollo, private router: Router) { }

  private wsUI: WSUi = new WSUi(this.apollo)

  ngOnInit(): void {
    // console.log()
    this.wsUI.getSideArea(this.router.url.substr(1).split('?q=')[0]).valueChanges.subscribe(result => {
      console.log(JSON.parse(result.data && result.data['getSideArea']) || [])
      this.sidePanelArea = new SidePanelArea(JSON.parse(result.data && result.data['getSideArea']).panels || [], this.apollo)
    })
  }

}
