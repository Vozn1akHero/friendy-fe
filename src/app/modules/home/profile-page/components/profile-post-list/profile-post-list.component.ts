import {AfterViewInit, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import Post from '../../models/post.model';
import * as UserPostsActions from '../../store/user-posts/user-posts.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {UserPostService} from '../../services/user-post.service';
import {Router} from '@angular/router';
import {PostItemComponent} from '../../../../shared/post/post-item/post-item.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-post-list',
  templateUrl: './profile-post-list.component.html',
  styleUrls: ['./profile-post-list.component.scss']
})
export class ProfilePostListComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() isUserProfileOwner : boolean;
  @Input() userId: number;
  @ViewChildren(PostItemComponent) postRefs: QueryList<PostItemComponent>;
  /*userPosts: Post[];
  userPostsLoading: boolean;*/
  posts$: Observable<Post[]>;
  loaded$: Observable<boolean>;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private userPostService : UserPostService,
              private subscriptionManager : SubscriptionManager) { }

  ngOnInit() {
    //this.setLoaded();
    this.getUserPosts();
  }

  /*setLoaded(){
    this.subscriptionManager.add(this.store.select(state => state.profilePageUserPosts.loading)
      .subscribe(value => {
        this.userPostsLoading = value;
      }));
  }*/

  getUserPosts() {
    this.loaded$ = this.store.select(state => state.profilePageUserPosts.loaded);
    this.store.dispatch(new UserPostsActions.GetUserPosts({ userId : this.userId }));
    this.posts$ = this.store.select(state => state.profilePageUserPosts.posts);
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

  ngAfterViewInit(): void {

  }
}
