import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class NewCommentOrResponseService {
  private _responseTarget : BehaviorSubject<{responseToComment: boolean,
    responseToResponse: boolean,
    targetId: number}> = new BehaviorSubject(null);

  public get responseTarget(){
    return this._responseTarget.getValue();
  }

  public set responseTarget(value:{responseToComment: boolean,
    responseToResponse: boolean,
    targetId: number}){
    this._responseTarget.next(value);
  }
}
