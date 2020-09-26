import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router'; //module for implementing routing

import { AppComponent } from './app.component';
import{HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent}  from './contactus/contactus.component';
import { CategoryComponent } from './category/category.component';
import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    {path:'category',component:CategoryComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'blog',component:BlogComponent},
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contactus', component: ContactusComponent }

];


export const routes : ModuleWithProviders = RouterModule.forRoot(router);
