import { footer } from "../data/footerDb";
import { carousel } from "../data/carouselDb";
import { navBar, sideBar } from "../data/navbarDb";
import { _NavBar, _Footer, _SideBar, _Carousel } from "../classe/ui";
import { SidePanelArea } from "../classe/sideplanel";
import { otherSideAreaPanels, aboutSideAreaPanels } from "../data/sideareaDb";
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { variable } from '@angular/compiler/src/output/output_ast';
import { threadId } from 'worker_threads';


export class WSUi {
  navBarQuery = gql`query {
        getNavBar
         {
          logo
          sidebar {
            title
            menuItems {
              text
              icon
              link
            }
            social {
              text
              icon
              link
            }
          }
        }
      }`
  sideAreaQuery = gql`query  getSideArea($page:String!){
        getSideArea(page:$page)
      }
      `

  footerQuery = gql`query{
        getFooter {
          social {
            text
            icon
            link
          }
          copyright
        }
      }
      `

  constructor(private apollo: Apollo) { }
  getNavBar() {
    return this.apollo.watchQuery({
      query: this.navBarQuery
    });
  }
  getFooter() {
    return this.apollo.watchQuery({
      query: this.footerQuery
    });
  }

  getSideArea(args) {
    console.log(args)
    return this.apollo.watchQuery({
      query: this.sideAreaQuery,
      variables: { page: args }
    });
  }
  getAboutSideArea(): Promise<SidePanelArea> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { }, 10)
      resolve(aboutSideAreaPanels)
    })
  }

  getCarousel(): Promise<_Carousel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { }, 10)
      resolve(carousel)
    })
  }
  // getComment(): Promise<_Comment>{
  //     return new Promise((resolve, reject) => {
  //         setTimeout(() => { }, 10)
  //         resolve(articles[Math.round(Math.random() * 3)].)
  //     })
  // }
}