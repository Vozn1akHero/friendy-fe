import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import * as AdministeredEventsActions from '../store/administered-events/administered-events.actions';
import Event from '../models/event.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsSearchPanelService {
  public get panelOpened(): BehaviorSubject<boolean> {
    return this._panelOpened;
  }

  public set panelOpened(value: BehaviorSubject<boolean>) {
    this._panelOpened = value;
  }

  private _panelOpened = new BehaviorSubject(false);

  constructor(private http: HttpClient){}
}
