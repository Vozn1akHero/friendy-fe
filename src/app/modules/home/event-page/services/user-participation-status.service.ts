import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class UserParticipationStatusService {
  public get isUserParticipant$(): Observable<boolean> {
    return this._isUserParticipant.asObservable();
  }
  set isUserParticipant(value: boolean) {
    this._isUserParticipant.next(value);
  }
  private _isUserParticipant = new BehaviorSubject(null);

  public get isUserParticipantLoaded$() : Observable<boolean>{
    return this._isUserParticipantLoaded.asObservable();
  }
  set isUserParticipantLoaded(value: boolean) {
    this._isUserParticipantLoaded.next(value);
  }
  private _isUserParticipantLoaded = new BehaviorSubject(false);

  constructor(private http: HttpClient){}

  getUserParticipationStatus(eventId: number){
    return this.http.get(`api/event-participant/${eventId}/current-user-status`, {observe: 'response'})
      .pipe(map((res:HttpResponse<boolean>) =>{
      this.isUserParticipant = res.body;
      this.isUserParticipantLoaded = true;
    }))
  }
}
