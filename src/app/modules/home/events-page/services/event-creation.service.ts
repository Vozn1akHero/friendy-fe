import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import ExtendedEventModel from '../models/event-creation.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventCreationService {
  constructor(private http: HttpClient){}

  create(event: ExtendedEventModel){
    return this.http.post(`api/event`, event).pipe(map((res: HttpResponse<any>) => {
      return res.body;
    }))
  }
}
