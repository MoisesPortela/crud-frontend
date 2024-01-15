import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//Observable
import {Observable, tap} from "rxjs";
import { BaseService } from '../base-service/base-service.component';

@Injectable({
  providedIn: 'root'
})
export class DrinkService extends BaseService{

  private url:string = 'http://localhost:8080'
  listAllDrinks(page:number):Observable<any>{
    return this.get<any>(`${this.url}/drinks?size=5&page=${page}`)
  }
  
  listDrinkById(id:number):Observable<any> {
    return this.get<any>(`${this.url}/drinks/${id}`)
  }



}
