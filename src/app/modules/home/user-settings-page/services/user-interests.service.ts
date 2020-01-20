import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import InterestModel from '../models/interest.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserInterestsService{
  constructor(private http : HttpClient){}

  getByTitle(title: string) : Observable<InterestModel[]>{
    return this.http.get(`api/user/interests/find/${title}`, {observe: 'response'})
      .pipe(map((res:HttpResponse<any[]>) => {
        let interests : InterestModel[] = [];
        res.body.map(value => {
          interests.push(new InterestModel(value.id, value.title));
        });
        return interests;
      }))
  }

  removeById(id: number){
    return this.http.delete(`api/user/interests/${id}`, {observe: 'response'});
  }
}
