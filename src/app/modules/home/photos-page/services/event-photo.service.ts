import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import Photo from '../models/photo.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventPhotoService {
  private _eventPhotos = new BehaviorSubject<Photo[]>([]);


  get eventPhotos(): Photo[] {
    return this._eventPhotos.getValue();
  }

  set eventPhotos(value: Photo[]) {
    this._eventPhotos.next(value);
  }

  get eventPhotos$() : Observable<Photo[]>{
    return this._eventPhotos.asObservable();
  }

  constructor(private http: HttpClient){}

  getRange(eventId: number, startIndex: number, length: number) : void {
    this.http.get(`api/event-photo/range?eventId=${eventId}&startIndex=${startIndex}&length=${length}`, {observe: 'body'})
      .subscribe((res: any[]) => {
        let photos : Photo[] = [];
        res.map(value => {
          photos.push(new Photo(value.path));
        });
        this.eventPhotos = photos;
      })
  }

  post(eventId: number, image : File) : void {
    const content = new FormData();
    content.append("image", image);
    this.http.post(`api/event-photo/${eventId}`, content).subscribe((value:any) => {
      this.eventPhotos.push(new Photo(value.path));
    })
  }
}
