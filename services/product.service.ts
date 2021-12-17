import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    plantLiked$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>  {
    return this.http.get<any[]>("http://localhost:3000/list_products");
  }
}
