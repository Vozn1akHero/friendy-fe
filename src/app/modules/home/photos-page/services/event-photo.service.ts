import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  set eventPhotos(value: Photo[]) {
    this._eventPhotos.next(value);
  }

  get eventPhotos$() : Observable<Photo[]>{
    return this._eventPhotos.asObservable();
  }

  constructor(private http: HttpClient){}

  getRange(eventId: number, page: number) {
    return this.http.get(`api/event-photo/${eventId}/page/${page}`, {observe: 'body'})
      .pipe(map((res: any[]) => {
        let photos : Photo[] = [];
        res.map(value => {
          photos.push(new Photo(value.path));
        });
        this.eventPhotos = photos;
        this._loaded.next(true);
      }))
  }

  post(eventId: number, image : File) : void {
    const content = new FormData();
    content.append("image", image);
    this.http.post(`api/event-photo/${eventId}`, content).subscribe((value:any) => {
      this.eventPhotos.push(new Photo(value.path));
    })
  }
}
