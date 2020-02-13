import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Photo from '../models/photo.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserPhotoService {
  private _userPhotos = new BehaviorSubject<Photo[]>([]);
  private _loaded = new BehaviorSubject<boolean>(false);

  /*get userPhotos(): Photo[] {
    return this._userPhotos.getValue();
  }*/

  get loaded$(){
    return this._loaded.asObservable();
  }

  set userPhotos(value: Photo[]) {
    this._userPhotos.next(value);
  }

  get userPhotos$() : Observable<Photo[]>{
    return this._userPhotos.asObservable();
  }

  constructor(private http: HttpClient){}

  getRange(userId: number, page: number){
    return this.http.get(`api/user-photo/${userId}/page/${page}`,
      {observe: 'response'}).pipe(map(res => {
        this._loaded.next(true);
        return res;
    }))
  }

  post(userId: number, image : File) : void {
    const content = new FormData();
    content.append("image", image);
    this.http.post(`api/user-photo/${userId}`, content).subscribe((value:any) => {
      this.userPhotos.push(new Photo(value.path));
    })
  }
}
