import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import Photo from '../models/photo.model';

@Injectable()
export class PhotoViewService {
  get visible$() {
    return this._visible.asObservable();
  }
  get image$(){
    return this._image.asObservable();
  }
  open(image: Photo){
    this._image.next(image);
    this._visible.next(true);
  }
  close(){
    this._visible.next(false);
  }
  private _visible : BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _image: BehaviorSubject<Photo> = new BehaviorSubject(null);
}
