import {Injectable, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient){}

  getCitiesByKeyword(keyword: string){
    return this.http.get(`api/location/city/by-keyword?keyword=${keyword}`, {observe: 'response'})
  }
}
