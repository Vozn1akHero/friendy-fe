import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import EventAdminModel from '../models/event-admin.model';
import EventParticipantDetailed from "../models/event-participant-detailed.model";

@Injectable({
  providedIn: 'root'
})
export class EventAdminsService {
  private _eventAdmins = new BehaviorSubject([]);
  private _eventAdminsLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  private set eventAdmins(value : EventAdminModel[]){
    this._eventAdmins.next(value);
  }

  public get eventAdmins$() : Observable<EventAdminModel[]>{
    return this._eventAdmins.asObservable();
  }

  public set eventAdminsLoaded(value : boolean){
    this._eventAdminsLoaded.next(value);
  }

  public get eventAdminsLoaded$(){
    return this._eventAdminsLoaded.asObservable();
  }

  private removeAdminById(id: number){
    this.eventAdmins = [...this._eventAdmins.getValue().filter(value => value.id !== id)];
  }

  get(eventId: number){
    this.http.get<any[]>(`api/event-admins/all/${eventId}`,
      {observe: 'body'})
      .pipe(take(1))
      .subscribe(res=>{
        let eventAdmins: EventAdminModel[] = [];
        res.map(value => {
          eventAdmins.push(new EventAdminModel(value.id, value.name, value.surname, value.avatar, value.isEventCreator))
        });
        this.eventAdmins = eventAdmins;
        this.eventAdminsLoaded = true;
      })
  }

  delete(eventId: number, adminId: number){
    this.http.delete(`api/event-admins/${eventId}?adminId=${adminId}`,
      {observe: 'response'}).pipe(take(1)).subscribe(res => {
      if(res.status == 200){
        this.removeAdminById(adminId);
      }
    })
  }

  filterByKeyword(keyword: string){
    return this.http.get<any[]>(`api/event-admins/filter/${keyword}`, { observe: 'body' })
      .pipe(take(1))
      .subscribe(res => {
        let eventAdmins: EventAdminModel[] = [];
        res.map(value => {
          eventAdmins.push(new EventAdminModel(value.id, value.name, value.surname, value.avatar, value.isEventCreator))
        });
        this.eventAdmins = eventAdmins;
      })
  }
}
