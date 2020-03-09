import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FriendshipService {
  constructor(private http: HttpClient){}

  findInterestsByKeyword(keyword: string){
    return this.http.get(`/api/user-search/interests?q=${keyword}`, {observe: 'response'})
  }
}
