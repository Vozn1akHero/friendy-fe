import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import UserPostModel from '../models/user-post.model';
import PostDataService from '../services/post-data.service';
import EventPostModel from '../models/event-post.model';

@Injectable()
export class PostDataResolver implements Resolve<UserPostModel|EventPostModel> {
  constructor(private postDataService : PostDataService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<UserPostModel|EventPostModel> {
    const id = route.params["postId"];
    if(window.location.href.includes("profile")){
      return this.postDataService.getUserPostData(id);
    } else {
      return this.postDataService.getEventPostData(id);
    }
  }
}
