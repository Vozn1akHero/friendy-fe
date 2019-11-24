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
  private _eventExemplaryParticipants = new BehaviorSubject([]);
  private _eventParticipants = new BehaviorSubject([]);

  private _eventExemplaryParticipantsLoaded = new BehaviorSubject(false);
  private _eventParticipantsLoaded = new BehaviorSubject(false);

  private set eventExemplaryParticipants(value : EventExemplaryParticipant[]){
    this._eventExemplaryParticipants.next(value);
  }

  private set eventExemplaryParticipantsLoaded(value : boolean){
    this._eventExemplaryParticipantsLoaded.next(value);
  }

  public get eventExemplaryParticipantsLoaded$(){
    return this._eventExemplaryParticipantsLoaded.asObservable();
  }

  public get eventExemplaryParticipants$() : Observable<EventExemplaryParticipant[]>{
    return this._eventExemplaryParticipants.asObservable();
  }

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

  getExemplary(eventId){
    return this.http.get<any[]>(`api/event-participant/exemplary/${eventId}`, {observe: 'body'})
      .pipe(map(res => {
        let eventParticipants: EventExemplaryParticipant[] = [];
        res.map(value => {
          eventParticipants.push(new EventExemplaryParticipant(value.id, value.avatarPath))
        });
        this.eventExemplaryParticipants = eventParticipants;
        this.eventExemplaryParticipantsLoaded = true;
    }))
  }

  getRange(eventId: number, startIndex: number, length: number){
    return this.http.get<any[]>(`api/event-participant/range?eventId=${eventId}&startIndex=${startIndex}&length=${length}`,
      {observe: 'body'}).subscribe(res=>{
      let eventParticipants: EventParticipantListItem[] = [];
      res.map(value => {
        eventParticipants.push(new EventParticipantListItem(value.id, value.name, value.surname, value.avatarPath))
      });
      this.eventParticipants = eventParticipants;
      this.eventParticipantsLoaded = true;
    })
  }
}
