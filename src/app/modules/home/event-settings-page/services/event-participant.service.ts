import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import EventParticipant from '../models/event-participant-detailed.model';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventParticipantService {
  private _eventParticipants = new BehaviorSubject([]);
  private _eventParticipantsLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  private set eventParticipants(value : EventParticipant[]){
    this._eventParticipants.next(value);
  }

  private get eventParticipants() : EventParticipant[]{
    return this._eventParticipants.getValue();
  }

  public get eventParticipants$() : Observable<EventParticipant[]>{
    return this._eventParticipants.asObservable();
  }

  public set eventParticipantsLoaded(value : boolean){
    this._eventParticipantsLoaded.next(value);
  }

  public get eventParticipantsLoaded$(){
    return this._eventParticipantsLoaded.asObservable();
  }

  filterByKeyword(keyword: string){
    return this.http.get<any[]>(`api/event-participant/filter/${keyword}`, { observe: 'body' })
      .pipe(take(1))
      .subscribe(res => {
        let eventParticipants: EventParticipant[] = [];
        res.map(value => {
          eventParticipants.push(new EventParticipant(value.id, value.name, value.surname, value.avatarPath, value.isAdmin))
        });
        this.eventParticipants = eventParticipants;
    })
  }

  getRange(eventId: number, startIndex: number, length: number){
    return this.http.get<any[]>(`api/event-participant/range?eventId=${eventId}&startIndex=${startIndex}&length=${length}`,
      {observe: 'body'})
      .pipe(take(1))
      .subscribe(res=>{
      let eventParticipants: EventParticipant[] = [];
      res.map(value => {
        eventParticipants.push(new EventParticipant(value.id, value.name, value.surname, value.avatarPath, value.isAdmin))
      });
      this.eventParticipants = eventParticipants;
      this.eventParticipantsLoaded = true;
    })
  }
}
