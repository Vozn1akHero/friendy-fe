import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, take} from 'rxjs/operators';
import EventAdminModel from '../models/event-admin.model';
import EventParticipantDetailedModel from '../models/event-participant-detailed.model';

@Injectable()
export class EventAdminsService {
  private _eventAdmins = new BehaviorSubject([]);
  private _foundEventAdmins = new BehaviorSubject([]);
  private _eventAdminsLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  private set eventAdmins(value : EventAdminModel[]){
    this._eventAdmins.next([...this._eventAdmins.getValue(), ...value]);
  }
  private set foundEventAdmins(value : EventAdminModel[]){
    this._foundEventAdmins.next([...this._foundEventAdmins.getValue(), ...value]);
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
    this._eventAdmins.next([...this._eventAdmins
      .getValue()
      .filter(value => value.id !== id)]);
  }

  private addAdmin(user: EventParticipantDetailedModel){
    this._eventAdmins.next([new EventAdminModel(user.id,
      user.name,
      user.surname,
      user.avatarUrl,
      false), ...this._eventAdmins.getValue()])
  }

  getRange(eventId: number, page: number, length: number){
    this.http.get(`api/event-admins/range/${eventId}?page=${page}&length=${length}`,
      {observe: 'response'})
      .pipe(map((res : HttpResponse<any[]>)=> {
        const data = [...res.body.map(value => new EventAdminModel(value.id,
          value.name,
          value.surname,
          value.avatar,
          value.isCreator))];
        if(page === 1){
          this._eventAdmins.next(data)
        } else {
          this.eventAdmins = data;
        }
        this.eventAdminsLoaded = true;
      })).toPromise()
  }

  create(eventId: number, user: EventParticipantDetailedModel){
    return this.http.post(`api/event-admins/${eventId}/${user.id}`,
      {},
      {observe: 'response'})
      .pipe(map((res: HttpResponse<any>) => {
        this.addAdmin(user);
      })).toPromise();
  }

  deleteById(eventId: number, adminId: number){
    this.http.delete(`api/event-admins/${eventId}/${adminId}`,
      {observe: 'response'}).pipe(map((res : HttpResponse<any[]>)=> {
      if(res.status == 200){
        this.removeAdminById(adminId);
      }
    })).toPromise()
  }

  filterByKeyword(eventId: number, keyword: string, page: number, length: number){
    if(page===1) this.foundEventAdmins = [];
    return this.http.get(`api/event-admins/filter/${eventId}
    ?keyword=${keyword}&page=${page}&length=${length}`,
      { observe: 'response' })
      .pipe(map((res : HttpResponse<any[]>)=> {
        this.foundEventAdmins = [...res.body.map(value =>
          new EventAdminModel(value.id, value.name, value.surname, value.avatar, value.isEventCreator)
        )]
      })).toPromise()
  }
}
