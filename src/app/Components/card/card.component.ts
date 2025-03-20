import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  meals!: any[];
  Cname!: any;
  constructor(private dataServes: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (typeof document != "undefined") {

      this.activatedRoute.paramMap.subscribe((apr) => {
        this.Cname = apr.get("customName") || "all";
        console.log(this.Cname);

      })

      this.dataServes.getAllMealsByCategory(this.Cname).subscribe((res) => {
        this.meals = res.meals;
      })
    }

  };
}