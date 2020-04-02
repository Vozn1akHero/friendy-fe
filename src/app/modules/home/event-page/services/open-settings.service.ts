import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class OpenSettingsService {
  private _openedSettingsValueChanged = new BehaviorSubject(false);

  public set openedSettingsValueChanged(value: boolean) {
    this._openedSettingsValueChanged.next(value);
  }

  public get openedSettingsValueChanged() {
    return this._openedSettingsValueChanged.value;
  }

  public get openedSettingsValueChanged$() {
    return this._openedSettingsValueChanged.asObservable();
  }
}
