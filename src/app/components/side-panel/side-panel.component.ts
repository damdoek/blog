import { Component, OnInit, Input } from '@angular/core';
import { _Panel } from '../../utils/classe/sideplanel'
import { DomSanitizer } from '@angular/platform-browser';
import { domain } from '../../config'
@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  endpointApi = `http://${domain}:5000`
  constructor(private sanitizer: DomSanitizer) {

  }
  @Input() panel: _Panel
  ngOnInit(): void {
    if (this.panel.type == "banner-spot-if") {
      this.panel.item.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.panel.item.link);
    }
  }

}
