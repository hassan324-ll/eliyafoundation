import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Projects } from './pages/projects/projects';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  {path: 'about-us', component: AboutUs},
  {path: 'projects', component: Projects},
  {path: 'contact-us', component: ContactUs}
];
