import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { ExtNotifComponent } from './ext-notif/ext-notif.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, ExtNotifComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [NavbarComponent, FooterComponent, ExtNotifComponent],
})
export class ComponentsModule { }
