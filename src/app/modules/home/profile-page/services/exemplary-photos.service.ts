import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import ExemplaryPhotoModel from '../models/exemplary-photo.model';

@Injectable({
  providedIn: 'root'
})
export class ExemplaryPhotosService {
  private _eventPhotos = new BehaviorSubject([]);
  private _eventPhotosLoaded = new BehaviorSubject(false);

  private set eventPhotos(value : ExemplaryPhotoModel[]){
    this._eventPhotos.next(value);
  }

  private set eventPhotosLoaded(value:boolean){
    this._eventPhotosLoaded.next(value);
  }

  public get eventPhotosLoaded$(){
    return this._eventPhotosLoaded.asObservable();
  }

  public get eventPhotos$() : Observable<ExemplaryPhotoModel[]>{
    return this._eventPhotos.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  getExemplary(userId: number){
    this.http.get(`api/user-photo/range?startIndex=0&length=3&userId=${userId}`,
      {observe:'body'}).subscribe((res : any[]) => {
      let arr : ExemplaryPhotoModel[] = [];
      res.map(value => {
        arr.push(new ExemplaryPhotoModel(value.path));
      });
      this.eventPhotos = arr;
      this.eventPhotosLoaded = true;
    })
  }
}
