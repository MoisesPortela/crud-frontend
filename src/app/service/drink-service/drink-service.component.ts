import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//Observable
import {Observable, tap} from "rxjs";
import { BaseService } from '../base-service/base-service.component';

@Injectable({
  providedIn: 'root'
})
export class DrinkService extends BaseService{

  private url:string = 'http://localhost:8080/drinks'
  listAllDrinks(page:number):Observable<any>{
    return this.get<any>(`${this.url}?size=5&page=${page}`)
  }
  listDrinkById(id:number):Observable<any> {
    return this.get<any>(`${this.url}/${id}`)
  }
  createDrink(drink:any):Observable<any>{
    return this.post<any>(this.url,drink)
  }
  updateDrink(drinkId: number, drink:any):Observable<any>{
    return this.put<any>(`${this.url}/${drinkId}`,drink)
  }
  deleteDrinkById(id:any):Observable<any>{
    return this.delete<any>(`${this.url}/${id}`)
  }



}
