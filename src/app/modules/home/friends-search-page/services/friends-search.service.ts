import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsSearchService {
  constructor(private http: HttpClient){}

  getUsersByCriteria(criteria){
    return this.http.post('/api/user/getUsersByCriteria', criteria, { observe: 'response' })
  }
}
