import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  categoriesNames!: any[];
  constructor(private dataServes: DataService) { }

  ngOnInit(): void {
    if (typeof document != "undefined") {
      this.dataServes.getAllCategoriesName().subscribe((res) => {
        this.categoriesNames = res.meals;
      })
    }
  };
}
