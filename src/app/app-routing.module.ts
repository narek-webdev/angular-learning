import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { ContactusComponent } from './contactus/contactus.component';

import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contactus", component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }