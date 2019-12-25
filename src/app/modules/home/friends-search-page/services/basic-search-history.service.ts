import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicSearchHistoryService {
  constructor(private http: HttpClient) {
  }

  createEntry(name: string, surname: string){
    return this.http.post(`api/friendship-recommendation/basic-search-data?insertedName=${name}&insertedSurname=${surname}`,
      {},
      {observe: 'response'}).pipe(map((res: HttpResponse<any>) => {
    }))
  }
}
