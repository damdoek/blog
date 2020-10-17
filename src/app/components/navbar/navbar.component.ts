import { Component, OnInit } from '@angular/core';
import { NavBar, _NavBar, SideBar, _SideBar } from 'src/app/utils/classe/ui';
import { WSUi } from 'src/app/utils/web-service/ui';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Apollo } from 'apollo-angular';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBar: NavBar
  searchValue: String
  searchForm: FormGroup = this.fb.group({
    search: ""
  })
  constructor(private router: Router, private fb: FormBuilder, private apollo: Apollo) { }

  private wsUI: WSUi = new WSUi(this.apollo)

  ngOnInit(): void {
    this.wsUI.getNavBar().valueChanges.subscribe(result => {
      this.navBar = new NavBar(result.data && result.data['getNavBar'])
      console.log(this.navBar)
    })
    // this.getSideBar()
  }
  goToSearch() {
    this.navBar.setSearchValue(this.searchForm.value.search)
    console.log(this.navBar.searchInputValue)
    this.navBar.goToSearch(this.router)
  }

  goTo(arg) {
    window.open(arg, '_blank')
  }

  // async getSideBar() {
  //   this.sideBar = new SideBar(await this.fetchSideBar())
  //   console.log(this.sideBar)
  // }


}
