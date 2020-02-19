import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileBackgroundService {
  constructor(private http: HttpClient){}

  update(newBackground:File){
    const content = new FormData();
    content.append("newBackground", newBackground);
    return this.http.put('/api/user/background', content, {responseType: 'text'});
  }
}
