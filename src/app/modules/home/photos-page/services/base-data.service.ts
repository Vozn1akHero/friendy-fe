import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import Photo from '../models/photo.model';
import BaseData from '../models/base-data.model';

@Injectable()
export class BaseDataService {
  private _baseData = new BehaviorSubject<BaseData>(null);
  private _baseDataLoaded = new BehaviorSubject<boolean>(false);

/*  get baseData(): BaseData {
    return this._baseData.getValue();
  }*/

  set baseData(value: BaseData) {
    this._baseData.next(value);
  }

  get baseData$() : Observable<BaseData>{
    return this._baseData.asObservable();
  }

  get loaded$(){
    return this._baseDataLoaded.asObservable();
  }

  constructor(private http: HttpClient){}

  getUserData(userId: number){
    return this.http.get(`api/user/${userId}/with-selected-fields?selectedFields=Id,Name,Surname,Avatar`, {observe: 'body'})
      .subscribe((value:any) => {
        console.log(value)
        this.baseData = new BaseData(value.id, value.name + " " + value.surname, value.avatar);
        this._baseDataLoaded.next(true);
      })
  }

  getEventData(eventId: number){
    return this.http.get(`api/event/${eventId}/with-selected-fields?selectedFields=Id,Title,Avatar`, {observe: 'body'})
      .subscribe((value:any) => {
        this.baseData = new BaseData(value.id, value.title, value.avatar);
        this._baseDataLoaded.next(true);
      })
  }
}
