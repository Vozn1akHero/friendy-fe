import {Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import Post from '../../models/post.model';
import * as UserPostsActions from '../../store/user-posts/user-posts.actions';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {take} from 'rxjs/operators';
import {UserPostService} from '../../services/user-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-post-list',
  templateUrl: './profile-post-list.component.html',
  styleUrls: ['./profile-post-list.component.scss']
})
export class ProfilePostListComponent implements OnInit, OnDestroy {
  @Input() isUserProfileOwner : boolean;
  @Input() userId: number;

  userPosts: Post[];
  userPostsLoading: boolean;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private userPostService : UserPostService,
              private subscriptionManager : SubscriptionManager) { }

  ngOnInit() {
    this.setLoaded();
    this.getUserPosts();
  }

  setLoaded(){
    this.subscriptionManager.add(this.store.select(state => state.profilePageUserPosts.loading)
      .subscribe(value => {
        this.userPostsLoading = value;
      }));
  }

  getUserPosts() {
    this.store.dispatch(new UserPostsActions.GetUserPosts({ userId : this.userId }));
    this.subscriptionManager.add(this.store.select(state => state.profilePageUserPosts.posts)
      .subscribe(userPosts => {
        this.userPosts = userPosts;
      }));
  }

  onRemovePost(postId: number){
    this.store.dispatch(new UserPostsActions.RemovePost({ id: postId }))
  }

  onLikePost(postId: number){
    this.store.dispatch(new UserPostsActions.LikePost({ id: postId  }));
  }

  onUnlikePost(postId: number){
    this.store.dispatch(new UserPostsActions.UnlikePost({ id: postId  }));
  }

/*  redirectToComments(postId: number){
    this.router.navigate([window.location.pathname, 'comments', postId ])
  }*/

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
