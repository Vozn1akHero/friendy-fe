import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class UserParticipationStatusService {
  /*public get isUserParticipant$(): Observable<boolean> {
    return this._isUserParticipant.asObservable();
  }
  set isUserParticipant(value: boolean) {
    this._isUserParticipant.next(value);
  }
  private _isUserParticipant = new BehaviorSubject(null);
  */
  constructor(private http: HttpClient){}

  getUserParticipationStatus(eventId: number){
    return this.http.get(`api/event-participant/${eventId}/current-user-status`, {observe: 'response'});
  }
}
