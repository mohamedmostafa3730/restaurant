import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  meals!: any[];
  Cname!: any;
  constructor(private dataServes: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataServes.getAllMealsByCategory("Beef").subscribe((res) => {
      this.meals = res.meals;
    })

    this.activatedRoute.paramMap.subscribe((apr) => {
      this.Cname = apr.get("customName") || "all";
    })
    this.dataServes.getAllMealsByCategory(this.Cname).subscribe((res) => {
      this.meals = res.meals;
    })
    console.log(this.Cname);

  };


}
