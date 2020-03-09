import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import EventDataModel from '../models/event-data.model';
import * as moment from 'moment';
import NewEventDataModel from "../models/new-event-data.model";

@Injectable()
export class EventDataService {
  constructor(private http: HttpClient){}

  getById(id: number){
    return this.http.get(`api/event/${id}`, { observe: 'response'})
      .pipe(map((res : HttpResponse<any>) => {
        return this.transformDataByBody(res.body);
    }))
  }

  update(data: NewEventDataModel){
    return this.http.patch(`api/event-data/${data.id}`,
      data,
      {observe: 'response'}).pipe(map((res: HttpResponse<any>) => {
      return this.transformDataByBody(res.body);
    }))
  }

  changeAvatarById(id: number, file: File){
    const content = new FormData();
    content.append("image", file);
    return this.http.patch(`/api/event-data/${id}/avatar`,
      content,
      {observe: 'response'});
  }

  changeBackgroundById(id: number, file: File){
    const content = new FormData();
    content.append("image", file);
    return this.http.patch(`/api/event-data/${id}/background`,
      content,
      {observe: 'response'});
  }

  private transformDataByBody(data: any){
    const hour = +moment(data.date).format('HH');
    const minute = +moment(data.date).format('mm');
    const date = data.date.split("T")[0];
    return new EventDataModel(data.id,
      data.title,
      data.description,
      data.street,
      data.streetNumber,
      data.city,
      data.participantsAmount,
      date,
      hour,
      minute,
      data.entryPrice,
      data.avatarPath,
      data.backgroundPath);
  }
}
