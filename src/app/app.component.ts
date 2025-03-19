import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { CardComponent } from "./Components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant';
}
