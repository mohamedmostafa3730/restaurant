import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "home" },
    { path: "about", component: AboutComponent, title: "about" },
    { path: "services", component: ServicesComponent, title: "services" },
    { path: "contact", component: ContactComponent, title: "contact" },
    { path: "**", component: NotfoundComponent, title: "notfond" }
];