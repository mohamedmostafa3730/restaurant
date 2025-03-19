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



}
