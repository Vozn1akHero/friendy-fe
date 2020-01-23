import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import EventParticipantDetailed from '../models/event-participant-detailed.model';
import EventBannedParticipantModel from '../models/event-banned-participant.model';

@Injectable({
  providedIn: 'root'
})
export class EventParticipantService {
  private _eventParticipants = new BehaviorSubject([]);
  private _eventParticipantsLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  private set eventParticipants(value : EventParticipantDetailed[]){
    this._eventParticipants.next(value);
  }

  private get eventParticipants() : EventParticipantDetailed[]{
    return this._eventParticipants.getValue();
  }

  public get eventParticipants$() : Observable<EventParticipantDetailed[]>{
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
        let eventParticipants: EventParticipantDetailed[] = [];
        res.map(value => {
          eventParticipants.push(new EventParticipantDetailed(value.id, value.name, value.surname, value.avatarPath, value.isAdmin))
        });
        this.eventParticipants = eventParticipants;
    })
  }

  getRange(eventId: number, startIndex: number, length: number){
    return this.http.get<any[]>(`api/event-participant/range?eventId=${eventId}&startIndex=${startIndex}&length=${length}`,
      {observe: 'body'})
      .pipe(take(1))
      .subscribe(res=>{
      let eventParticipants: EventParticipantDetailed[] = [];
      res.map(value => {
        eventParticipants.push(new EventParticipantDetailed(value.id, value.name, value.surname, value.avatarPath, value.isAdmin))
      });
      this.eventParticipants = eventParticipants;
      this.eventParticipantsLoaded = true;
    })
  }

  getBanned(eventId: number){
    return this.http.get(`api/event-participant/${eventId}/banned`, {observe: 'response'})
      .pipe(map((res: HttpResponse<any[]>) => {
        let bannedParticipants : EventBannedParticipantModel[] = [];
        res.body.map(value => {
          bannedParticipants.push(new EventBannedParticipantModel(value.id, value.name, value.surname, value.avatarPath));
        });
        return bannedParticipants;
      }))
  }

  unbanParticipant(eventId: number, userId: number){
    return this.http.post(`api/event-participant/${userId}/unban/${eventId}`,
      {}, {observe: 'response'});
  }
}
