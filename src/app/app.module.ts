import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module'
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    LazyLoadImageModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent]
})
export class AppModule { }
