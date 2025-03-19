import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-services',
  imports: [SidebarComponent, CardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
