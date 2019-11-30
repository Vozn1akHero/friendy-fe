import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventSearchService {
  private get foundEvents(): BehaviorSubject<any[]> {
    return this._foundEvents;
  }

  private set foundEvents(value: BehaviorSubject<any[]>) {
    this._foundEvents = value;
  }

  private _foundEvents = new BehaviorSubject([]);

  constructor(private http: HttpClient){}

  filterByKeyword(keyword: string){
    this.http.get(`api/search/${keyword}`,
      {observe: 'body'}).pipe(take(1)).subscribe((res:any[]) => {
      console.log(res);
    })
  }
}
