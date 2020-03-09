import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import Photo from '../models/photo.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class EventPhotoService {
  private _eventPhotos = new BehaviorSubject<Photo[]>([]);
  private _loaded = new BehaviorSubject<boolean>(false);
  get loaded$(){
    return this._loaded.asObservable();
  }
  get eventPhotos$() : Observable<Photo[]>{
    return this._eventPhotos.asObservable();
  }

  constructor(private http: HttpClient){}

  getRange(eventId: number, page: number) {
    return this.http.get(`api/event-photo/${eventId}/page/${page}`,
      {observe: 'body'})
      .pipe(map((res: any[]) => {
        if(this._eventPhotos.getValue().length===0){
          this._eventPhotos.next([...res.map(value =>
            new Photo(value.id,
              value.image.path))]);
          this._loaded.next(true);
        } else {
          this._eventPhotos.next([
            ...this._eventPhotos.getValue(),
            ...res.map(value => new Photo(value.id,
              value.image.path))
          ]);
        }
      }))
  }

  post(eventId: number, image : File) : void {
    const content = new FormData();
    content.append("image", image);
    this.http.post(`api/event-photo/${eventId}`, content).subscribe((value:any) => {
      this._eventPhotos.next([new Photo(value.id,
        value.path),
        ...this._eventPhotos.getValue()]);
    })
  }

  delete(id: number){
    this.http.delete(`api/event-photo/${id}`, {observe: 'response'})
      .pipe(map((res: HttpResponse<any>) => {
      this._eventPhotos.next([...this._eventPhotos
        .getValue()
        .filter(e=>e.id===id)])
    }));
  }
}
