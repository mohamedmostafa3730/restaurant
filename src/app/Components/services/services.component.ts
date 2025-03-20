import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardComponent } from "../card/card.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [SidebarComponent, CardComponent, RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
