import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class OpenSettingsService {
  private _openedSettingsValueChanged = new BehaviorSubject(false);

  public set openedSettingsValueChanged(value : boolean){
    this._openedSettingsValueChanged.next(value);
  }

  public get openedSettingsValueChanged(){
    return this._openedSettingsValueChanged.value;
  }

  public get openedSettingsValueChanged$(){
    return this._openedSettingsValueChanged.asObservable();
  }
}
