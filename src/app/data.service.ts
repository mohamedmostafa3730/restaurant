import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }




  getAllCategoriesName(): Observable<any> {
    return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
  }

  getAllMealsByCategory(Category: string): Observable<any> {
    if (Category == "all") {
      return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    } else {
      return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Category}`)
    }
  }

}
