import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root/root.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: RootComponent,
        children: [{
            path: '',
            loadChildren: () => import('./root/root.module').then(mod => mod.RootModule)
        },
        { path: '**', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            initialNavigation: 'enabled'
        }),
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
