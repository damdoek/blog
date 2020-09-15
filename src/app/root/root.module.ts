import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { routes } from './root.routing';
import { RouterModule } from '@angular/router';
import { TopSectionComponent } from '../components/top-section/top-section.component';
import { ServiceSectionComponent } from '../components/service-section/service-section.component';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { ProductSectionComponent } from '../components/product-section/product-section.component';
import { ContactSectionComponent } from '../components/contact-section/contact-section.component';
import { MapSectionComponent } from '../components/map-section/map-section.component';
import { PostSectionComponent } from '../components/post-section/post-section.component';
import { BestPostSectionComponent } from '../components/best-post-section/best-post-section.component';
import { SideareaSectionComponent } from '../components/sidearea-section/sidearea-section.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PostComponent } from './post/post.component';
import { PostContentEletComponent } from '../components/post-content-elet/post-content-elet.component';
import { RelatedSectionComponent } from '../components/related-section/related-section.component';
import { CommentSectionComponent } from '../components/comment-section/comment-section.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidePanelComponent } from '../components/side-panel/side-panel.component';
import { PostListSectionComponent } from '../components/post-list-section/post-list-section.component';
import { PostGridSectionComponent } from '../components/post-grid-section/post-grid-section.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent,
    TopSectionComponent,
    ServiceSectionComponent,
    AboutSectionComponent,
    ProductSectionComponent,
    ContactSectionComponent,
    MapSectionComponent,
    PostSectionComponent,
    BestPostSectionComponent,
    SideareaSectionComponent,
    PostComponent,
    PostContentEletComponent,
    RelatedSectionComponent,
    CommentSectionComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    SidePanelComponent,
    PostListSectionComponent,
    PostGridSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule,
    FormsModule
  ]
})
export class RootModule { }
