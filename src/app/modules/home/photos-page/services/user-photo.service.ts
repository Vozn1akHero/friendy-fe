import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import Photo from "../models/photo.model";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class UserPhotoService {
  private _loaded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  private _userPhotos = new BehaviorSubject<Photo[]>([]);

  get loaded$() {
    return this._loaded.asObservable();
  }
  get userPhotos$(): Observable<Photo[]> {
    return this._userPhotos.asObservable();
  }

  getRange(userId: number, page: number, length: number) {
    return this.http
      .get(`api/user-photo/${userId}/page/${page}?length=${length}`, {
        observe: "response"
      })
      .pipe(
        map((res: HttpResponse<any[]>) => {
          if (this._userPhotos.getValue().length === 0) {
            const arr = [
              ...res.body.map(value => new Photo(value.id, value.path))
            ];
            this._userPhotos.next(arr);
            this._loaded.next(true);
          } else {
            this._userPhotos.next([
              ...this._userPhotos.getValue(),
              ...res.body.map(value => new Photo(value.id, value.path))
            ]);
          }
        })
      )
      .toPromise();
  }

  post(image: File): void {
    const content = new FormData();
    content.append("image", image);
    this.http.post(`api/user-photo`, content).subscribe((value: any) => {
      this._userPhotos.next([
        new Photo(value.id, value.path),
        ...this._userPhotos.getValue()
      ]);
    });
  }

  delete(id: number) {
    this.http.delete(`api/event-photo/${id}`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        this._userPhotos.next([
          ...this._userPhotos.getValue().filter(e => e.id === id)
        ]);
      })
    );
  }
}
