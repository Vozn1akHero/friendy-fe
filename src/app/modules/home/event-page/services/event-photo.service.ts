import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import EventPhoto from '../models/event-photo.model';

@Injectable({
  providedIn: 'root'
})
export class EventPhotoService {
  private _eventPhotos = new BehaviorSubject([]);
  private _eventPhotosLoaded = new BehaviorSubject(false);

  private set eventPhotos(value : EventPhoto[]){
    this._eventPhotos.next(value);
  }

  private set eventPhotosLoaded(value:boolean){
    this._eventPhotosLoaded.next(value);
  }

  public get eventPhotosLoaded$(){
    return this._eventPhotosLoaded.asObservable();
  }

  public get eventPhotos$() : Observable<EventPhoto[]>{
    return this._eventPhotos.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  getExemplary(eventId: number){
    this.http.get(`api/event-photo/range?startIndex=0&length=3&eventId=${eventId}`,
      {observe:'body'}).subscribe((res : any[]) => {
        let arr : EventPhoto[] = [];
        res.map(value => {
          arr.push(new EventPhoto(value.path));
        });
        this.eventPhotos = arr;
        this.eventPhotosLoaded = true;
    })
  }
}
