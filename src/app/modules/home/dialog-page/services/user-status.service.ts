import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  constructor(private http: HttpClient){}

  /*get(id: number){
    return this.http.get(`api/user/is-online/${id}`, {observe: 'response'})
  }*/
}
