import {Component, Input, OnInit} from '@angular/core';
import UserPostModel from '../../models/user-post.model';
import * as moment from 'moment';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as UserPostsActions from '../../../profile-page/store/user-posts/user-posts.actions';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  postData: UserPostModel;
  postDataLoaded: boolean = false;
  @Input() postId: number;
  timePassed: string;

  constructor(private router : ActivatedRoute, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.postData = this.router.snapshot.data.post;
    this.timePassed = moment(this.postData.date).fromNow();
    this.postDataLoaded = true;
  }

  onLikePost(postId: number){
    this.store.dispatch(new UserPostsActions.LikePost({ id: postId  }));
  }

  onUnlikePost(postId: number){
    this.store.dispatch(new UserPostsActions.UnlikePost({ id: postId  }));
  }

  onRemovePost(postId: number){
    this.store.dispatch(new UserPostsActions.RemovePost({ id: postId }))
  }
}
