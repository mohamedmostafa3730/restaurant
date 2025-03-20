import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CardComponent } from './Components/card/card.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "about", component: AboutComponent, title: "About" },
    {
        path: "services", component: ServicesComponent, title: "services", children: [
            { path: "", redirectTo: 'all', pathMatch: "full" },
            { path: "all", component: CardComponent, title: "services/all" },
            { path: ":customName", component: CardComponent, title: "services" },
            // { path: ":customName/:mealId", component: CardComponent, title: "Card" }
        ]
    },
    { path: "contact", component: ContactComponent, title: "Contact" },
    { path: "**", component: NotfoundComponent, title: "Not Found" }
];