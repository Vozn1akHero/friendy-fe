import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import EventExemplaryParticipant from '../models/event-exemplary-participant.model';
import EventParticipantListItem from '../models/event-participant-list-item.model';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventParticipantService {
  private _eventParticipants = new BehaviorSubject([]);
  private _eventParticipantsLoaded = new BehaviorSubject(false);


  private set eventParticipants(value : EventParticipantListItem[]){
    this._eventParticipants.next(value);
  }

  public set eventParticipantsLoaded(value : boolean){
    this._eventParticipantsLoaded.next(value);
  }

  public get eventParticipantsLoaded$(){
    return this._eventParticipantsLoaded.asObservable();
  }

  public get eventParticipants$() : Observable<EventParticipantListItem[]>{
    return this._eventParticipants.asObservable();
  }

  constructor(private http: HttpClient) {}


  getRange(eventId: number, page: number, length: number){
    return this.http.get<any[]>(`api/event-participant/range/${eventId}?page=${page}&length=${length}`,
      {observe: 'body'}).pipe(map(res=>{
      let eventParticipants: EventParticipantListItem[] = [];
      res.map(value => {
        eventParticipants.push(new EventParticipantListItem(value.id, value.name, value.surname, value.avatarPath))
      });
      return eventParticipants;
    }))
  }
}
