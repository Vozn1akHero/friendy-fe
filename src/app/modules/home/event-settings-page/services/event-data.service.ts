import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import EventDataModel from '../models/event-data.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  constructor(private http: HttpClient){}

  getById(id: number){
    return this.http.get(`api/event/${id}`, { observe: 'body'})
      .pipe(map((res : any) => {
        const hour = +moment(res.date).format('HH');
        const minute = +moment(res.date).format('mm');
        const date = res.date.split("T")[0];
        const formattedData = moment(date, "DD.MM.YYYY").toDate();
        return new EventDataModel(res.id,
          res.title,
          res.description,
          res.street,
          res.streetNumber,
          res.city,
          res.participantsAmount,
          date,
          hour,
          minute,
          res.entryPrice);
    }))
  }

  update(data: EventDataModel){
    return this.http.put(`api/event/${data.id}`, {data});
  }
}
