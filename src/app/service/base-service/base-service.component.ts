import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
@Injectable()
export abstract class BaseService{
  constructor (public http:HttpClient){}
  protected get<T>(resource: string, params?: HttpParams, headers?: HttpHeaders) {
    return this.http.get<T>(`${resource}`,{params, headers});
  }
  protected post<T>(resource:string, drink:any){
    return this.http.post<T>(`${resource}`,drink);
  }
  protected delete<T>(resource:string,params?:HttpParams,headers?:HttpHeaders){
    return this.http.delete<T>(`${resource}`,{params, headers});
  }
}