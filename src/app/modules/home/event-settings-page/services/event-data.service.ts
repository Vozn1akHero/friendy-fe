import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import EventDataModel from '../models/event-data.model';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  get eventData$() {
    return this._eventData.asObservable();
  }

  private set eventData(value: EventDataModel) {
    this._eventData.next(value);
  }
  private _eventData = new BehaviorSubject(null);

  constructor(private http: HttpClient){}

  getById(id: number){
    this.http.get(`api/event/${id}`, { observe: 'body'}).pipe(take(1)).subscribe((res : any) => {
      this.eventData = new EventDataModel(res.id,
        res.title,
        res.street,
        res.streetNumber,
        res.city,
        res.avatarPath,
        res.participantsAmount,
        res.currentParticipantsAmount,
        res.date);
    })
  }
}
