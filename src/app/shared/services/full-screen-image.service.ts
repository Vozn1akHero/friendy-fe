import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullScreenImageService {
  get visible$() {
    return this._visible.asObservable();
  }
  get imageUrl$(){
    return this._imageUrl.asObservable();
  }
  open(imageUrl: string){
    this._imageUrl.next(imageUrl);
    this._visible.next(true);
  }
  close(){
    this._visible.next(false);
  }
  private _visible : BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _imageUrl: BehaviorSubject<string> = new BehaviorSubject(null);
}
