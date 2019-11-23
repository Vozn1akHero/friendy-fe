import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Photo from '../models/photo.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPhotoService {
  private _userPhotos = new BehaviorSubject<Photo[]>([]);

  get userPhotos(): Photo[] {
    return this._userPhotos.getValue();
  }

  set userPhotos(value: Photo[]) {
    this._userPhotos.next(value);
  }

  get userPhotos$() : Observable<Photo[]>{
    return this._userPhotos.asObservable();
  }

  constructor(private http: HttpClient){}

  getRange(eventId: number, startIndex: number, length: number){
    return this.http.get(`api/user/photos?eventId=${eventId}&startIndex=${startIndex}&length=${length}`, {observe: 'response'});
  }

  post(userId: number, image : File) : void {
    const content = new FormData();
    content.append("image", image);
    this.http.post(`api/user-photo/${userId}`, content).subscribe((value:any) => {
      this.userPhotos.push(new Photo(value.path));
    })
  }
}
