import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import NewPost from '../models/new-post.model';
import EventPost from '../models/event-post.model';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class EventPostService {
  constructor(private http: HttpClient) {
  }

  get eventPosts$(): Observable<EventPost[]> {
    return this._eventPosts.asObservable();
  }

  set newEventPost(value: EventPost) {
    this._eventPosts.next([value, ...this._eventPosts.getValue()]);
  }

  private _eventPosts = new BehaviorSubject([]);

  get eventPosts(): EventPost[] {
    return this._eventPosts.getValue();
  }

  set eventPosts(value: EventPost[]) {
    this._eventPosts.next(value);
  }

  set fillEventPosts(value: EventPost[]) {
    this._eventPosts.next([...this._eventPosts.getValue(), ...value]);
  }

  loaded$ = new BehaviorSubject(false);

  create(post: NewPost, eventId: number) {
    const content = new FormData();
    content.append('image', post.image);
    content.append('content', post.content);

    this.http.post(`/api/event-post/${eventId}`,
      content, {observe: 'response'}).subscribe((res: HttpResponse<any>) => {
      this.newEventPost = new EventPost(res.body.id,
        res.body.eventId,
        res.body.avatarPath,
        res.body.content,
        res.body.imagePath,
        res.body.likesCount,
        res.body.commentsCount,
        res.body.postId,
        res.body.isPostLikedByUser,
        res.body.date);
    });
  }

  getByEventId(id: number, page: number) {
    return this.http.get(`/api/event-post/paginate/${id}/${page}`, {observe: 'body'})
      .pipe(map((res: any[]) => {
        let eventPosts: EventPost[] = [];
        res.map(value => {
          eventPosts.push(new EventPost(value.id,
            value.eventId,
            value.avatarPath,
            value.content,
            value.imagePath,
            value.likesCount,
            value.commentsCount,
            value.postId,
            value.isPostLikedByUser,
            value.date));
        });
        this.fillEventPosts = eventPosts;
        this.loaded$.next(true);
      })).toPromise();
  }

  delete(postId: number, eventId: number) {
    return this.http.delete(`api/post/${postId}/event-post/${eventId}`, {observe: 'response'})
      .pipe(map(
        () => {
          this.eventPosts = [...this.eventPosts.filter(value => value.postId !== postId)];
        })).toPromise();
  }

  like(id: number, eventId: number) {
    return this.http.put(`/api/post/like/${id}/event-post/${eventId}`,
      null, {responseType: 'text'}).toPromise();
  }

  unlike(id: number, eventId: number) {
    return this.http.put(`/api/post/unlike/${id}/event-post/${eventId}`,
      null, {responseType: 'text'}).toPromise();
  }
}
