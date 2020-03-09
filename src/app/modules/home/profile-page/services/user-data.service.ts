import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SessionModel} from '../../../../shared/models/session.model';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient){}

  getData(id : number){
    return this.http.get(`/api/user/${id}/extended`, {observe: 'body'})
      .pipe(map((res:any) => {
        return new User(res.id,
          res.birthday,
          res.city,
          res.email,
          res.avatar,
          res.profileBg,
          res.genderId,
          res.name,
          res.surname,
          new SessionModel(res.session.id,
            res.session.connectionStart,
            res.session.connectionEnd),
          res.status);
    }))
  }
}
