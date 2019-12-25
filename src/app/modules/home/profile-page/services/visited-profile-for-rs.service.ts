import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitedProfileForRsService {
  constructor(private http: HttpClient){}

  create(profileId: number){
    return this.http.post(`api/friendship-recommendation/profile-visit/${profileId}`,
      {},{observe: 'response'})
      .pipe(map((res: HttpResponse<any>) => {

      }))
  }
}
