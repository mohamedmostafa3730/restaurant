import { Component } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  categoriesNames!: any[];
  constructor(private dataServes: DataService) { }

  ngOnInit(): void {
    this.dataServes.getAllCategoriesName().subscribe((res) => {
      this.categoriesNames = res.meals;
    })
  };
}
