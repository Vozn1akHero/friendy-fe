import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import Post from '../../models/post.model';
import User from '../../models/user.model';
import UserAvatar from '../../models/user-avatar.model';
import * as UserPostsActions from '../../store/user-posts/user-posts.actions';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-profile-post-list',
  templateUrl: './profile-post-list.component.html',
  styleUrls: ['./profile-post-list.component.scss']
})
export class ProfilePostListComponent implements OnInit, OnDestroy {
/*  @Output() newPostEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() removePost: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() likePost: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() unlikePost: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();*/

  componentLoadedSubscription: Subscription;
  componentLoaded : boolean;

  userPostsSubscription: Subscription;
  userPosts: Post[];

  userId: number;
  userIdSubscription: Subscription;

  userAvatar: UserAvatar;
  userAvatarSubscription: Subscription;


  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.componentLoadedSubscription = combineLatest(
      this.store.select(state => state.profilePageUserData.loaded),
      this.store.select(state => state.profilePageUserAvatar.loaded),
      this.store.select(state => state.profilePageUserPosts.loaded)
    ).subscribe(([userDataLoaded, userAvatarLoaded, userPostsLoaded]) => {
      this.componentLoaded = userDataLoaded && userAvatarLoaded && userPostsLoaded
    });

    this.getUserPosts();
    this.getUserAvatar();
    this.getUserId();
  }

  getUserPosts() {
    this.store.dispatch(new UserPostsActions.GetUserPosts());
    this.userPostsSubscription = this.store
      .select(state => state.profilePageUserPosts.posts)
      .subscribe(userPosts => {
        this.userPosts = userPosts;
      })
  }

  getUserAvatar(){
    this.userAvatarSubscription = this.store.select(state => state.profilePageUserAvatar.avatar)
      .subscribe(value => {
        this.userAvatar = value;
    })
  }

  getUserId(){
    this.userIdSubscription = this.store.select(state => state.profilePageUserData.user)
      .subscribe(value => {
        this.userId = value.id;
      })
  }

  onNewPost(newPost : FormGroup):void{
    console.log(newPost)
/*    const post : Post = {
      content: newPost.value.newMessageContent,
      image: newPost.value.image
    };

    this.store.dispatch(new UserPostsActions.AddPost(post));*/
  }

  onRemovePost(id){
    this.store.dispatch(new UserPostsActions.RemovePost({ id }))
  }

  onLikePost(id){
    this.store.dispatch(new UserPostsActions.LikePostStart({ id }))
  }

  onUnlikePost(id){
    this.store.dispatch(new UserPostsActions.UnlikePostStart({ id }))
  }

  ngOnDestroy(): void {
    this.userPostsSubscription.unsubscribe();
    this.userAvatarSubscription.unsubscribe();
  }
}
