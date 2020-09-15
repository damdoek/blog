import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,

        // canActivate: [AuthGuard]
    },
    {
        path: 'post/:id', component: PostComponent,
    },
    {
        path: 'search', component: SearchComponent,
    },
    {
        path: 'about', component: AboutComponent,
    }


];
