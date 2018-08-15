import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutprojectComponent } from './aboutproject/aboutproject.component';
import { AboutorganizationComponent } from './aboutorganization/aboutorganization.component';

const routes: Routes =[
  {path : '' , component : HomeComponent },
  {path : 'home', component : HomeComponent},
  {path : 'about',
  component : AboutComponent,
  children:[
  {path:'aboutprojects',component : AboutprojectComponent},
  {path:'aboutorganization',component:AboutorganizationComponent}
     ]},
  {path : 'contact', component : ContactComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[ AppComponent,
  HomeComponent,
  AboutComponent,
  ContactComponent,
  HeaderComponent,
  FooterComponent,
  AboutprojectComponent,
  AboutorganizationComponent]
