import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemplaryPhotosService {
  constructor(private http: HttpClient) {
  }

  getExemplary(userId: number){
    return this.http.get(`api/user-photo/range?startIndex=0&length=3&userId=${userId}`,
      {observe: 'response'})
  }
}
